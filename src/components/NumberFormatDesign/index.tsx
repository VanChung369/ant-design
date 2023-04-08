import { DECIMAL_SCALE } from '@/constants/fomatNumber';
import classNames from 'classnames';
import { FC } from 'react';
import { NumericFormat } from 'react-number-format';

const NumberFormatDesign: FC<NumberFormatDesign.NumberFormatProps> = ({
  value,
  className,
  decimalScale = DECIMAL_SCALE,
  displayType = 'text',
  thousandSeparator = true,
  thousandsGroupStyle,
  ...props
}) => {
  return (
    <NumericFormat
      thousandsGroupStyle={thousandsGroupStyle}
      value={value}
      decimalScale={decimalScale}
      displayType={displayType}
      thousandSeparator={thousandSeparator}
      className={classNames(className)}
      {...props}
    />
  );
};

export default NumberFormatDesign;
