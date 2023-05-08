import { Form, Formik } from "formik";
import { IoChevronBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import * as Yup from "yup";
import { InputText } from "../../components/InputText";
import { inputFieldsForgotPassword } from "../../data/inputFields";
import { useRecoveryMutation } from "../../store/api/auth.api";

export const RecoveryPage = () => {
  const navigate = useNavigate();
  const [onRecovery, { isLoading }] = useRecoveryMutation();

  const successAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Email sent successfully",
      confirmButtonText: "ok",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/login");
      }
    });
  };

  const handleRecovery = async (email: string) => {
    try {
      const res = await onRecovery(email);
      successAlert();
      navigate("/login");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="rounded-lg border-2 px-6 py-4 border-gray-200 w-2/5">
      <IoChevronBackCircle
        className="text-3xl text-H_green cursor-pointer mb-3"
        onClick={() => navigate(-1)}
      />
      <h1 className="block mb-2 text-2xl font-medium text-label">
        RECOVERY PASSWORD
      </h1>
      <Formik
        initialValues={{
          email: "",
        }}
        onSubmit={async ({ email }) => {
          handleRecovery(email);
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .required("Password is required")
            .email("Email is invalid"),
        })}
      >
        {() => (
          <Form>
            <div className="flex-row space-y-4">
              {inputFieldsForgotPassword.map((inputField) => (
                <InputText key={inputField.name} {...inputField} />
              ))}
              <button
                type="submit"
                className="bg-gray-200 group relative h-12 w-full overflow-hidden rounded-lg text-lg shadow"
              >
                <div className="absolute inset-0 w-3 bg-H_green transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-black group-hover:text-white">
                  Send email
                </span>
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
