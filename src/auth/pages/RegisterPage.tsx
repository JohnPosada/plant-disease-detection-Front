import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { InputText } from "../../components/InputText";
import { inputFieldsRegister } from "../../data/inputFields";
import { useRegisterMutation } from "../../store/api/auth.api";
import { createUserCredentials, useAuthStore } from "../../hooks/useAuthStore";
import { Spinner } from "../../components/Spinner";

export const RegisterPage = () => {
  const [onRegister, { isLoading }] = useRegisterMutation();
  const { startLogin } = useAuthStore();
  const navigate = useNavigate();
  const onClickRegister = async (values: createUserCredentials) => {
    try {
      const { token } = await onRegister(values).unwrap();

      startLogin(token);
    } catch (error) {}
  };

  if (isLoading) return <Spinner />;

  return (
    <div className="rounded-lg border-2 px-6 py-4 border-gray-200 w-2/5">
      <h1 className="block mb-2 text-2xl font-medium text-label">
        CREATE ACCOUNT
      </h1>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          onClickRegister(values);
        }}
        validationSchema={Yup.object({
          username: Yup.string().required("Username is required"),

          email: Yup.string()
            .required("Email is required")
            .email("Email is invalid"),

          password: Yup.string()
            .required("Password is required")
            .min(6, "Password must be at least 6 characters")
            .max(15, "Password must be less than 15 characters"),
        })}
      >
        {() => (
          <Form>
            <div className="flex-row space-y-4">
              {inputFieldsRegister.map((inputField) => (
                <InputText key={inputField.name} {...inputField} />
              ))}
              <div className="flex items-center justify-between mt-2">
                <p
                  className="cursor-pointer underline text-blue-800"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  I have an account
                </p>
              </div>
              <button
                type="submit"
                className="bg-gray-200 group relative h-12 w-full overflow-hidden rounded-lg text-lg shadow"
              >
                <div className="absolute inset-0 w-3 bg-H_green transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-black group-hover:text-white">
                  Confirm
                </span>
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
