import { Formik } from 'formik';

function FormikWrapper({
  initialValues,
  validationSchema,
  onSubmit,
  children,
}: FormikWrapper.FormikWrapperProps) {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {(formik) => {
        return children(formik);
      }}
    </Formik>
  );
}

export default FormikWrapper;
