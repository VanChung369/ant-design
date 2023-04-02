import { Formik } from 'formik';
import { FC } from 'react';

const FormikWrapper: FC<FormikWrapper.FormikProps> = ({
  initialValues,
  validationSchema,
  onSubmit,
  children,
  innerRef,
}) => {
  return (
    <Formik
      innerRef={innerRef}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return children(formik);
      }}
    </Formik>
  );
};

export default FormikWrapper;
