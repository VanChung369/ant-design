import { getIntl, getLocale } from '@umijs/max';
import { message } from 'antd';

export default function formatMessage({ descriptor, type, value }: FormatMessage.MessageProps) {
  const intl = getIntl(getLocale());

  message.config({
    maxCount: 2,
    duration: 3,
  });

  if (type) {
    return message[type]({
      content: intl.formatMessage(descriptor, value),
    });
  }

  return intl.formatMessage(descriptor, value);
}
