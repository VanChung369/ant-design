declare namespace DividerDesign {
  type DividerProps = {
    dashed?: boolean;
    orientation?: 'left' | 'right' | 'center' | undefined;
    orientationMargin?: number | string | undefined;
    titleTooltip?: string;
    plain?: boolean;
    className?: string | undefined;
    style?: CSSProperties;
    text?: ReactNode;
    type?: 'horizontal' | 'vertical' | undefined;
    htmlType?: string | any;
    children?: ReactNode;

    [key: string]: any;
  };
}
