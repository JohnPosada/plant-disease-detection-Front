import { ErrorMessage, useField } from "formik";
import { FC } from "react";

interface Props {
  name: string;
  label: string;
  className?: string;
  type: string;
  placeholder: string;
  hidden?: boolean;
}

export const InputText: FC<Props> = ({ type, hidden, className, ...props }) => {
  const { name, label } = props;
  const [field] = useField(name);
  return (
    <div>
      <label
        className="block mb-2 text-lg font-medium text-label"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        type={hidden ? "text" : type}
        {...field}
        {...props}
      />
      <ErrorMessage
        name={name}
        component="span"
        className="text-H_red text-sm"
      />
    </div>
  );
};
