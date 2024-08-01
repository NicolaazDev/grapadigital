import * as React from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import { CalendarIcon } from "lucide-react";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useFormContext } from "react-hook-form";

interface DatePickerProps {
  name: string;
  label: string;
  classname?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({ name, label, classname }) => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel className="font-[500] text-[--app-gray-900] text-[16px]">
            {label}
          </FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <div
                className={`focus:ring-offset-transparent center !justify-start focus:ring-transparent  !mt-[4px] ring-transparent ${classname} h-[55px] appearance-none placeholder:text-[#B3B3B3] placeholder:font-[16px] outline-none border rounded-[8px] text-[--app-gray-900] w-full border-[#D9D9D9] py-2 px-3 ${
                  errors[name] ? "border-red-500" : ""
                }`}
              >
                <CalendarIcon size={20} strokeWidth={1} className="mr-5" />
                {field.value ? (
                  format(field.value, "PPP", { locale: ptBR })
                ) : (
                  <span>{format(new Date(), "PPP", { locale: ptBR })}</span>
                )}
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                locale={ptBR}
                classNames={{
                  root: "px-4 py-6",
                  nav: "flex items-center justify-between ",
                  months: "bg-transparent",
                  month_caption:
                    "absolute left-1/2 -translate-x-1/2 top-[25px]",
                  outside: "opacity-50",
                  weekday: "font-[400] text-[12px]",
                }}
              />
            </PopoverContent>
          </Popover>
        </FormItem>
      )}
    />
  );
};

export default DatePicker;
