declare namespace TypographyDesign {
  type TypographyProps = {
    isShorten?: boolean;
    copyable?: any;

    icon?: ReactNode;
    typeTypography?: string;
    className?: string;
    text?: string;
    customComponent?: any;
    children?: ReactNode;
    onChange?: (string) => any;
    tooltip?: boolean | ReactNode;
    editing?: boolean;
    maxLength?: number;
    minRows?: number;
    maxRows?: number;
    editableText?: string;
    onCancel?: function;
    onStart?: function;
    onEnd?: function;
    triggerType?: ('icon' | 'text')[];
    enterIcon?: ReactNode;

    [key: string]: any;
  };
}
