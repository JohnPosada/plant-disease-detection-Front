import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { InputText } from "../../components/InputText";
import { inputFieldsLogin } from "../../data/inputFields";

export const Login = () => {
  return (
    <div className="rounded-lg border-2 px-6 py-4 border-gray-200 w-2/4">
      <h1 className="block mb-2 text-2xl font-medium text-label">LOGIN</h1>
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
            <div className="flex-row space-y-4">
              {inputFieldsLogin.map((inputField) => (
                <InputText key={inputField.name} {...inputField} />
              ))}
              <div className="flex items-center justify-between mt-2">
                <p className="cursor-pointer underline text-blue-800">
                  Olvidaste tu contraseña?
                </p>
                <p className="cursor-pointer underline text-blue-800">
                  ¿No tienes cuenta?
                </p>
              </div>
              <button
                type="submit"
                className="bg-gray-200 group relative h-12 w-full overflow-hidden rounded-lg text-lg shadow"
              >
                <div className="absolute inset-0 w-3 bg-H_green transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-black group-hover:text-white">
                  Login
                </span>
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
