"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFormContext } from "react-hook-form";

interface SelectFieldProps {
  options: string[];
  placeholder: string;
  name: string;
  label: string;
  classname?: string;
}

export const SelectField: React.FC<SelectFieldProps> = ({
  options,
  placeholder,
  name,
  label,
  classname,
}) => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="font-[500] text-[--app-gray-900] text-[16px]">
            {label}
          </FormLabel>
          <Select onValueChange={field.onChange} defaultValue={options[0]}>
            <FormControl>
              <SelectTrigger
                className={`focus:ring-offset-transparent focus:ring-transparent !mt-[4px] ring-transparent ${classname} h-[55px] appearance-none placeholder:text-[#B3B3B3] placeholder:font-[16px] outline-none border rounded-[8px] text-[--app-gray-900] w-full border-[#D9D9D9] py-2 px-3 ${
                  errors[name] ? "border-red-500" : ""
                }`}
              >
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
};
