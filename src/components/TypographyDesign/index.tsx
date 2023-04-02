import ParagraphSuffix from '@/components/TypographyDesign/components/ParagraphSuffix';
import TextEllipsis from '@/components/TypographyDesign/components/TextEllipsis';
import { TYPE_TYPOGRAPHY } from '@/constants/type';
import classNames from 'classnames';
import { FC } from 'react';
import style from './index.less';

const TypographyDesign: FC<TypographyDesign.TypographyProps> = ({
  text,
  copyable,
  customComponent,
  isShorten,
  className,
  typeTypography,
  textTooltip,
  triggerType,
  minRows,
  maxRows,
  enterIcon,
  maxLength,
  icon,
  onChange,
  editing,
  children,
  ...props
}) => {
  let typographyRender = customComponent;

  switch (typeTypography) {
    case TYPE_TYPOGRAPHY.PARAGRAPH_SUFFIX:
      typographyRender = (
        <ParagraphSuffix
          text={text}
          onChange={onChange}
          textTooltip={textTooltip}
          icon={icon}
          editing={editing}
          triggerType={triggerType}
          enterIcon={enterIcon}
          maxLength={maxLength}
          className={className}
          minRows={minRows}
          maxRows={maxRows}
          isShorten={isShorten}
          {...props}
        />
      );
      break;
    case TYPE_TYPOGRAPHY.TEXT_ELLIPSIS:
      typographyRender = (
        <TextEllipsis
          isShorten={isShorten}
          copyable={copyable}
          text={text}
          textTooltip={textTooltip}
          {...props}
        >
          {children}
        </TextEllipsis>
      );
      break;
    default:
      typographyRender = (
        <ParagraphSuffix text={text} isShorten={isShorten} className={className} {...props} />
      );
      break;
  }

  return <div className={classNames(style.paragraph)}>{typographyRender}</div>;
};

export default TypographyDesign;
