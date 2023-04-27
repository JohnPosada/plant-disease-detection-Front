import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { InputText } from "../../components/InputText";
import { inputFieldsLogin } from "../../data/inputFields";
import { useAuthStore } from "../../hooks/useAuthStore";
import { useLoginMutation } from "../../store/api/auth.api";
import { Spinner } from "../../components/Spinner";
import { useEffect, useState } from "react";
export interface UserCredentials {
  email: string;
  password: string;
}

export const LoginPage = () => {
  const navigate = useNavigate();
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const onClickForgotPassword = () => {
    navigate("/recovery");
  };
  const { startLogin, startLoginError, errorMessage } = useAuthStore();
  const [onLogin, { isLoading }] = useLoginMutation();

  const onClickLogin = async (values: UserCredentials) => {
    try {
      const { token } = await onLogin(values).unwrap();
      startLogin(token);
    } catch (error: any) {
      startLoginError(error.data.error);
      setShowErrorMessage(true);
    }
  };

  useEffect(() => {
    if (errorMessage) {
      setTimeout(() => {
        setShowErrorMessage(false);
        startLoginError("");
      }, 3000);
    }
  }, [errorMessage]);

  if (isLoading) return <Spinner />;

  return (
    <div className="rounded-lg border-2 px-6 py-4 border-gray-200 w-2/5 shadow-lg">
      <h1 className="block mb-2 text-2xl font-medium text-label">LOGIN</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values) => {
          await onClickLogin(values);
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .required("Email is required")
            .email("Email is invalid"),
          password: Yup.string()
            .required("Password is required")
            .min(6, "Password must be at least 6 characters")
            .max(20, "Password must be less than 20 characters"),
        })}
      >
        {() => (
          <Form>
            <div className="flex-row space-y-4">
              {inputFieldsLogin.map((inputField) => (
                <InputText key={inputField.name} {...inputField} />
              ))}
              <div className="flex items-center justify-between mt-2">
                <p
                  onClick={onClickForgotPassword}
                  className="cursor-pointer underline text-blue-800"
                >
                  Forgot password?
                </p>
                <p
                  className="cursor-pointer underline text-blue-800"
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  Don't have an account?
                </p>
              </div>
              {showErrorMessage && (
                <span className="text-red-500">{errorMessage}</span>
              )}
              <button
                type="submit"
                className="bg-gray-200 group relative h-12 w-full overflow-hidden rounded-lg text-lg shadow"
              >
                <div className="absolute inset-0 w-3 bg-H_green transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-H_brown group-hover:text-white">
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
