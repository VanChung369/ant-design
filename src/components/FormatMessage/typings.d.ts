declare namespace FormatMessage {
  type MessageProps = {
    descriptor: {
      id?: string | number;
      description?: string | object;
      defaultMessage?: string;
    };
    value?: any;
    type?: 'success' | 'error' | 'info' | 'warning' | 'loading';
  };
}
