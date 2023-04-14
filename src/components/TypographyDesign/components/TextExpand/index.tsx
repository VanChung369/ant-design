import ButtonDesign from '@/components/ButtonDesign';
import { useIntl } from '@@/exports';
import { Row, Typography } from 'antd';
import classNames from 'classnames';
import { FC, useState } from 'react';
import style from './index.less';

const { Paragraph } = Typography;

type TextExpandProps = {
  text?: string;
  textButton?: string;
  className?: string;
  rowsNumber?: number;
  justify?:
    | 'center'
    | 'start'
    | 'end'
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
    | undefined;

  [key: string]: any;
};

const TextExpand: FC<TextExpandProps> = ({
  text,
  className,
  justify = 'start',
  textButton,
  rowsNumber,
  ...props
}) => {
  const [ellipsis, setEllipsis] = useState(true);
  const intl = useIntl();

  return (
    <>
      <Paragraph
        className={classNames(className)}
        {...props}
        ellipsis={ellipsis ? { rows: rowsNumber || 5 } : false}
      >
        {text ?? '--'}
      </Paragraph>
      <Row justify={justify}>
        <ButtonDesign
          {...props}
          className={classNames(style.ReadMoreButton)}
          onClick={() => {
            setEllipsis(!ellipsis);
          }}
          text={textButton || intl.formatMessage({ id: 'common.textExpand.readMore' })}
        />
      </Row>
    </>
  );
};

export default TextExpand;
