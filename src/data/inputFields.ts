interface InputField {
  name: string;
  label: string;
  type: "text" | "email" | "password";
  placeholder: string;
  className?: string;
}

export const inputFieldsLogin: InputField[] = [
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
  },
];

export const inputFieldsRegister: InputField[] = [
  {
    name: "username",
    label: "Username",
    type: "text",
    placeholder: "Enter your Username",
  },

  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
  },
];

export const inputFieldsForgotPassword: InputField[] = [
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
  },
];

export const inputFieldsChangePassword: InputField[] = [
  {
    name: "oldPassword",
    label: "Old password",
    type: "password",
    placeholder: "Enter your old password",
  },
  {
    name: "newPassword",
    label: "New password",
    type: "password",
    placeholder: "Enter your new password",
  },
  {
    name: "confirmPassword",
    label: "Confirm password",
    type: "password",
    placeholder: "Confirm your new password",
  },
];
