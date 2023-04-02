import ButtonDesign from '@/components/ButtonDesign';
import { PageContainer } from '@ant-design/pro-components';
import React from 'react';

const Welcome: React.FC = () => {
  // const { token } = theme.useToken();
  // const { initialState } = useModel('@@initialState');
  return (
    <PageContainer>
      <ButtonDesign type={'dashed'} text={'button'} />
    </PageContainer>
  );
};

export default Welcome;
