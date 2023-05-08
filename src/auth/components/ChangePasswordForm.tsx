import { Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { InputText } from "../../components/InputText";
import { inputFieldsChangePassword } from "../../data/inputFields";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useResetPasswordMutation } from "../../store/api/plant.api";
import Swal from "sweetalert2";

export const ChangePasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [onResetPassword, { isLoading }] = useResetPasswordMutation();

  const successAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Your password has been changed",
      confirmButtonText: "ok",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/");
      }
    });
  };
  const handleResetPassword = async (password: string) => {
    try {
      await onResetPassword(password);
      successAlert();
      console.log("reset password", password);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <h1 className="mb-2 text-2xl font-medium text-label">Change password</h1>
      <Formik
        initialValues={{
          newPassword: "",
          confirmPassword: "",
        }}
        onSubmit={async ({ newPassword }) => {
          handleResetPassword(newPassword);
        }}
        validationSchema={Yup.object({
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
                  {inputField.name === "newPassword" && showPassword && (
                    <AiFillEye
                      onClick={toggleShowPassword}
                      className="self-end relative -left-2 text-xl mt-2"
                    />
                  )}
                  {inputField.name === "newPassword" && !showPassword && (
                    <AiFillEyeInvisible
                      onClick={toggleShowPassword}
                      className="self-end relative -left-2 text-xl mt-2"
                    />
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
