import ButtonDesign from '@/components/ButtonDesign';
import DividerDesign from '@/components/DividerDesign';
import NumberFormatDesign from '@/components/NumberFormatDesign';
import TypographyDesign from '@/components/TypographyDesign';
import { TYPE_TYPOGRAPHY } from '@/constants/type';
import { PageContainer } from '@ant-design/pro-components';
import React from 'react';

const Welcome: React.FC = () => {
  return (
    <PageContainer>
      <ButtonDesign type={'dashed'} text={'button'} />

      <DividerDesign />

      <TypographyDesign
        typeTypography={TYPE_TYPOGRAPHY.TEXT_SUFFIX}
        text={
          'Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background application'
        }
        isShorten={true}
        editing={false}
      />
      <DividerDesign />
      <TypographyDesign
        typeTypography={TYPE_TYPOGRAPHY.TEXT_ELLIPSIS}
        text={
          'Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background application'
        }
        isShorten={true}
      />

      <DividerDesign />
      <TypographyDesign
        typeTypography={TYPE_TYPOGRAPHY.TEXT_EXPAND}
        text={
          'Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team.'
        }
      />
      <DividerDesign />
      <NumberFormatDesign value={9999999} />
    </PageContainer>
  );
};

export default Welcome;
