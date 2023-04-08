declare namespace NumberFormatDesign {
  type NumberFormatProps = {
    value: number | any;
    format?: string;
    allowEmptyFormatting?: boolean;
    mask?: string;
    patternChar?: string;
    customInput?: ReactNode;
    defaultValue?: number | any;
    displayType?: 'text' | 'input' | undefined;
    getInputRef?: any;
    isAllowed?: function;
    valueIsNumericString?: boolean;
    prefix?: symbol | any;
    onValueChange?: function;
    thousandsGroupStyle?: 'lakh' | 'thousand' | 'wan';
    thousandSeparator?: string | boolean;
    renderText?: function | any;
    allowLeadingZeros?: boolean;
    allowNegative?: boolean;
    allowedDecimalSeparators?: [] | any;
    decimalScale?: number;
    decimalSeparator?: string;
    fixedDecimalScale?: true;
    suffix?: string;
    className?: string;
    isNotFormatDecimal?: boolean;
    [key: string]: any;
  };
}
