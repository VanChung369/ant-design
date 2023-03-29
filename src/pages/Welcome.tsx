import { PageContainer } from '@ant-design/pro-components';
import React from 'react';
import FormikWrapper from '../components/FormikWrapper';

// const InfoCard: React.FC<{
//   title: string;
//   index: number;
//   desc: string;
//   href: string;
// }> = ({ title, href, index, desc }) => {
//   const { useToken } = theme;

//   const { token } = useToken();

//   return (
//     <div
//       style={{
//         backgroundColor: token.colorBgContainer,
//         boxShadow: token.boxShadow,
//         borderRadius: '8px',
//         fontSize: '14px',
//         color: token.colorTextSecondary,
//         lineHeight: '22px',
//         padding: '16px 19px',
//         minWidth: '220px',
//         flex: 1,
//       }}
//     >
//       <div
//         style={{
//           display: 'flex',
//           gap: '4px',
//           alignItems: 'center',
//         }}
//       >
//         <div
//           style={{
//             width: 48,
//             height: 48,
//             lineHeight: '22px',
//             backgroundSize: '100%',
//             textAlign: 'center',
//             padding: '8px 16px 16px 12px',
//             color: '#FFF',
//             fontWeight: 'bold',
//             backgroundImage:
//               "url('https://gw.alipayobjects.com/zos/bmw-prod/daaf8d50-8e6d-4251-905d-676a24ddfa12.svg')",
//           }}
//         >
//           {index}
//         </div>
//         <div
//           style={{
//             fontSize: '16px',
//             color: token.colorText,
//             paddingBottom: 8,
//           }}
//         >
//           {title}
//         </div>
//       </div>
//       <div
//         style={{
//           fontSize: '14px',
//           color: token.colorTextSecondary,
//           textAlign: 'justify',
//           lineHeight: '22px',
//           marginBottom: 8,
//         }}
//       >
//         {desc}
//       </div>
//       <a href={href} target="_blank" rel="noreferrer">
//         learn more {'>'}
//       </a>
//     </div>
//   );
// };

const Welcome: React.FC = () => {
  // const { token } = theme.useToken();
  // const { initialState } = useModel('@@initialState');
  return (
    <PageContainer>
      <FormikWrapper
        initialValues={{}}
        onSubmit={(value: any) => {
          console.log(value);
        }}
      >
        {(formik: any) => (
          <form onSubmit={formik.handleSubmit}>
            <input
              type="text"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
            <button type="submit" disabled={formik.isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </FormikWrapper>
    </PageContainer>
  );
};

export default Welcome;
