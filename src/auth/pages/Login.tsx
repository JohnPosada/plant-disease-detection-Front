import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

export const Login = () => {
  return (
    <>
      <h1>Iniciar sesion</h1>
      <Formik
        initialValues={{ email: "", password: "", remember: false }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .required("Email is required")
            .email("Email is invalid"),
          password: Yup.string()
            .required("Password is required")
            .min(6, "Password must be at least 6 characters")
            .max(20, "Password must be less than 20 characters"),
          remember: Yup.boolean().oneOf([true], "Please check the box"),
        })}
      >
        {(formik: any) => (
          <Form>
            <label htmlFor="email">Email</label>
            <Field name="email" type="text" />
            <ErrorMessage
              name="email"
              component="span"
              className="text-H_red"
            />
            <label htmlFor="password">password</label>
            <Field name="password" type="text" />
            <ErrorMessage
              name="password"
              component="span"
              className="text-H_red"
            />
            <label>
              <Field name="remember" type="checkbox" />
              remember
            </label>
            <ErrorMessage
              name="remember"
              component="span"
              className="text-H_red"
            />
          </Form>
        )}
      </Formik>
    </>
  );
};
