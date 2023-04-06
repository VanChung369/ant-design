import ButtonDesign from '@/components/ButtonDesign';
import { useIntl } from '@@/exports';
import { Typography } from 'antd';
import classNames from 'classnames';
import { FC, useState } from 'react';

const { Paragraph } = Typography;

type TextExpandProps = {
  text?: string;
  textButton?: string;
  className?: string;
  rowsNumber?: number;

  [key: string]: any;
};

const TextExpand: FC<TextExpandProps> = ({ text, className, textButton, rowsNumber, ...props }) => {
  const [ellipsis, setEllipsis] = useState(true);
  const intl = useIntl();

  return (
    <>
      <Paragraph
        className={classNames(className)}
        {...props}
        ellipsis={ellipsis ? { rows: rowsNumber || 5 } : false}
      >
        {text}
      </Paragraph>

      <ButtonDesign
        {...props}
        onClick={() => {
          setEllipsis(!ellipsis);
        }}
        text={textButton || intl.formatMessage({ id: 'common.textExpand.readMore' })}
      />
    </>
  );
};

export default TextExpand;
