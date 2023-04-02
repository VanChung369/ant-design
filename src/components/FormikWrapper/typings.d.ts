declare namespace FormikWrapper {
  type FormikProps = {
    initialValues: object | any;
    validationSchema?: object | any;
    onSubmit?: MouseEventHandler<HTMLElement>;
    children: ReactNode;
    innerRef?: any;
  };
}
