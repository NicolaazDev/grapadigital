// inputField.tsx
import React from "react";
import { useFormContext, RegisterOptions } from "react-hook-form";

interface InputFieldProps {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  validation?: RegisterOptions;
}

export const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  type,
  placeholder,
  validation,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <label
        className="font-[500] text-[--app-gray-900] text-[16px]"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        className={`h-[55px] mt-1 appearance-none placeholder:text-[#B3B3B3] placeholder:font-[16px] outline-none border rounded-[8px] text-[--app-gray-900] w-full border-[#D9D9D9] py-2 px-3 ${
          errors[name] ? "border-red-500" : ""
        }`}
        placeholder={placeholder}
        {...register(name, validation)}
      />
      {errors[name] && (
        <p className="text-red-500 text-sm">{errors[name].message as string}</p>
      )}
    </div>
  );
};
