interface InputField {
  name: string;
  label: string;
  type: "text" | "email" | "password";
  placeholder: string;
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
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Enter your name",
  },
];
