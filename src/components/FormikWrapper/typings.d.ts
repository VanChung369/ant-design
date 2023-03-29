declare namespace FormikWrapper {
  type FormikWrapperProps = {
    initialValues: object | any;
    validationSchema?: object | any;
    onSubmit?: MouseEventHandler<HTMLElement>;
    children: ReactNode;
  };
}
