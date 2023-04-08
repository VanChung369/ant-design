import classNames from 'classnames';
import { FC } from 'react';
import { PatternFormat } from 'react-number-format';

const PatternFormatDesign: FC<NumberFormatDesign.NumberFormatProps> = ({
  value,
  className,
  format,
  mask,
  ...props
}) => {
  return (
    <PatternFormat
      value={value}
      format={format}
      mask={mask}
      className={classNames(className)}
      {...props}
    />
  );
};

export default PatternFormatDesign;
