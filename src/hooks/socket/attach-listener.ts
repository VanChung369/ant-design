import { MutableRefObject } from 'react';
import {
  DEFAULT_RECONNECT_INTERVAL_MS,
  DEFAULT_RECONNECT_LIMIT,
  isEventSourceSupported,
  ReadyState,
} from './constants';
import { setUpSocketIOPing } from './socket-io';
import { Options, SendMessage, WebSocketLike } from './types';
import { assertIsWebSocket } from './util';

export interface Setters {
  setLastMessage: (message: WebSocketEventMap['message']) => void;
  setReadyState: (readyState: ReadyState) => void;
}

const bindMessageHandler = (
  webSocketInstance: WebSocketLike,
  optionsRef: MutableRefObject<Options>,
  setLastMessage: Setters['setLastMessage'],
) => {
  webSocketInstance.onmessage = (message: WebSocketEventMap['message']) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    optionsRef.current.onMessage && optionsRef.current.onMessage(message);
    if (
      typeof optionsRef.current.filter === 'function' &&
      optionsRef.current.filter(message) !== true
    ) {
      return;
    }
    setLastMessage(message);
  };
};

const bindOpenHandler = (
  webSocketInstance: WebSocketLike,
  optionsRef: MutableRefObject<Options>,
  setReadyState: Setters['setReadyState'],
  reconnectCount: MutableRefObject<number>,
) => {
  webSocketInstance.onopen = (event: WebSocketEventMap['open']) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    optionsRef.current.onOpen && optionsRef.current.onOpen(event);
    reconnectCount.current = 0;
    setReadyState(ReadyState.OPEN);
  };
};

const bindCloseHandler = (
  webSocketInstance: WebSocketLike,
  optionsRef: MutableRefObject<Options>,
  setReadyState: Setters['setReadyState'],
  reconnect: () => void,
  reconnectCount: MutableRefObject<number>,
) => {
  if (isEventSourceSupported && webSocketInstance instanceof EventSource) {
    return () => {};
  }
  assertIsWebSocket(webSocketInstance, optionsRef.current.skipAssert);
  let reconnectTimeout: number;
  webSocketInstance.onclose = (event: WebSocketEventMap['close']) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    optionsRef.current.onClose && optionsRef.current.onClose(event);
    setReadyState(ReadyState.CLOSED);
    if (optionsRef.current.shouldReconnect && optionsRef.current.shouldReconnect(event)) {
      const reconnectAttempts = optionsRef.current.reconnectAttempts ?? DEFAULT_RECONNECT_LIMIT;
      if (reconnectCount.current < reconnectAttempts) {
        const nextReconnectInterval =
          typeof optionsRef.current.reconnectInterval === 'function'
            ? optionsRef.current.reconnectInterval(reconnectCount.current)
            : optionsRef.current.reconnectInterval;

        reconnectTimeout = window.setTimeout(() => {
          reconnectCount.current++;
          reconnect();
        }, nextReconnectInterval ?? DEFAULT_RECONNECT_INTERVAL_MS);
      } else {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        optionsRef.current.onReconnectStop && optionsRef.current.onReconnectStop(reconnectAttempts);
        console.warn(`Max reconnect attempts of ${reconnectAttempts} exceeded`);
      }
    }
  };

  return () => reconnectTimeout && window.clearTimeout(reconnectTimeout);
};

const bindErrorHandler = (
  webSocketInstance: WebSocketLike,
  optionsRef: MutableRefObject<Options>,
  setReadyState: Setters['setReadyState'],
  reconnect: () => void,
  reconnectCount: MutableRefObject<number>,
) => {
  let reconnectTimeout: number;

  webSocketInstance.onerror = (error: WebSocketEventMap['error']) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    optionsRef.current.onError && optionsRef.current.onError(error);
    if (isEventSourceSupported && webSocketInstance instanceof EventSource) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      optionsRef.current.onClose &&
        optionsRef.current.onClose({
          ...error,
          code: 1006,
          reason: `An error occurred with the EventSource: ${error}`,
          wasClean: false,
        });

      setReadyState(ReadyState.CLOSED);
      webSocketInstance.close();
    }

    if (optionsRef.current.retryOnError) {
      if (
        reconnectCount.current < (optionsRef.current.reconnectAttempts ?? DEFAULT_RECONNECT_LIMIT)
      ) {
        const nextReconnectInterval =
          typeof optionsRef.current.reconnectInterval === 'function'
            ? optionsRef.current.reconnectInterval(reconnectCount.current)
            : optionsRef.current.reconnectInterval;

        reconnectTimeout = window.setTimeout(() => {
          reconnectCount.current++;
          reconnect();
        }, nextReconnectInterval ?? DEFAULT_RECONNECT_INTERVAL_MS);
      } else {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        optionsRef.current.onReconnectStop &&
          optionsRef.current.onReconnectStop(optionsRef.current.reconnectAttempts as number);
        console.warn(`Max reconnect attempts of ${optionsRef.current.reconnectAttempts} exceeded`);
      }
    }
  };

  return () => reconnectTimeout && window.clearTimeout(reconnectTimeout);
};

export const attachListeners = (
  webSocketInstance: WebSocketLike,
  setters: Setters,
  optionsRef: MutableRefObject<Options>,
  reconnect: () => void,
  reconnectCount: MutableRefObject<number>,
  sendMessage: SendMessage,
): (() => void) => {
  const { setLastMessage, setReadyState } = setters;

  let interval: number;
  let cancelReconnectOnClose: () => void;
  let cancelReconnectOnError: () => void;

  if (optionsRef.current.fromSocketIO) {
    interval = setUpSocketIOPing(sendMessage);
  }

  bindMessageHandler(webSocketInstance, optionsRef, setLastMessage);

  bindOpenHandler(webSocketInstance, optionsRef, setReadyState, reconnectCount);

  cancelReconnectOnClose = bindCloseHandler(
    webSocketInstance,
    optionsRef,
    setReadyState,
    reconnect,
    reconnectCount,
  );

  cancelReconnectOnError = bindErrorHandler(
    webSocketInstance,
    optionsRef,
    setReadyState,
    reconnect,
    reconnectCount,
  );

  return () => {
    setReadyState(ReadyState.CLOSING);
    cancelReconnectOnClose();
    cancelReconnectOnError();
    webSocketInstance.close();
    if (interval) clearInterval(interval);
  };
};