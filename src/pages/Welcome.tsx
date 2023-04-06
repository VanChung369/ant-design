import ButtonDesign from '@/components/ButtonDesign';
import TypographyDesign from '@/components/TypographyDesign';
import { TYPE_TYPOGRAPHY } from '@/constants/type';
import { PageContainer } from '@ant-design/pro-components';
import { Divider } from 'antd';
import React from 'react';

const Welcome: React.FC = () => {
  return (
    <PageContainer>
      <ButtonDesign type={'dashed'} text={'button'} />

      <Divider />

      <TypographyDesign
        typeTypography={TYPE_TYPOGRAPHY.TEXT_SUFFIX}
        text={
          'Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background application'
        }
        isShorten={true}
        editing={false}
      />
      <Divider />
      <TypographyDesign
        typeTypography={TYPE_TYPOGRAPHY.TEXT_ELLIPSIS}
        text={
          'Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background application'
        }
        isShorten={true}
      />
      <Divider />
      <TypographyDesign
        typeTypography={TYPE_TYPOGRAPHY.TEXT_EXPAND}
        text={
          'Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team.'
        }
      />
    </PageContainer>
  );
};

export default Welcome;
