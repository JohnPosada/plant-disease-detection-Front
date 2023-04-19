import { Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { InputText } from "../../components/InputText";
import { inputFieldsChangePassword } from "../../data/inputFields";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export const ChangePasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <h1 className="mb-2 text-2xl font-medium text-label">Change password</h1>
      <Formik
        initialValues={{
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          oldPassword: Yup.string().required("Old password is required"),
          newPassword: Yup.string()
            .required("New password is required")
            .min(6, "Password must be at least 6 characters")
            .max(15, "Password must be less than 15 characters"),
          confirmPassword: Yup.string().oneOf(
            [Yup.ref("newPassword"), null],
            "Passwords must match"
          ),
        })}
      >
        {() => (
          <Form>
            <div className="flex flex-col gap-2">
              {inputFieldsChangePassword.map((inputField) => (
                <div className="flex-col flex" key={inputField.name}>
                  <InputText
                    // key={inputField.name}
                    {...inputField}
                    hidden={showPassword}
                  />
                  {inputField.name === "oldPassword" && showPassword && (
                    <AiFillEye
                      onClick={toggleShowPassword}
                      className="self-end relative -left-2 text-xl mt-2"
                    />
                    // <AiFillEye
                    //   onClick={toggleShowPassword}
                    //   className="self-end sm:self-end sm:absolute sm:bottom-[16.3rem] sm:left-[28.5rem] relative -left-2 text-xl"
                    // />
                  )}
                  {inputField.name === "oldPassword" && !showPassword && (
                    <AiFillEyeInvisible
                      onClick={toggleShowPassword}
                      className="self-end relative -left-2 text-xl mt-2"
                    />
                    // <AiFillEyeInvisible
                    //   onClick={toggleShowPassword}
                    //   className="self-end relative -top-11 -left-2 text-xl"
                    // />
                  )}
                </div>
              ))}

              <div className="flex items-center justify-between mt-5">
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
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
