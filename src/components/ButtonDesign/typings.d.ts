declare namespace ButtonDesign {
  type ButtonProps = {
    type?: 'default' | 'primary' | 'link' | 'text' | 'ghost' | 'dashed' | undefined;
    shape?: 'default' | 'circle' | 'round' | undefined;
    icon?: ReactNode;
    size?: 'small' | 'middle' | 'large' | undefined;
    titleTooltip?: string;
    triggerTooltip?: 'contextMenu' | 'click' | 'focus' | 'hover';
    className?: string | undefined;
    onClick?: MouseEventHandler<HTMLElement>;
    text: ReactNode;
    menu?: ReactNode;
    disabled?: boolean;
    danger?: boolean;
    dropdown?: boolean;
    block?: boolean;
    htmlType?: string | any;
    loading?: boolean;
    href?: string;
    children?: ReactNode;

    [key: string]: any;
  };
}
