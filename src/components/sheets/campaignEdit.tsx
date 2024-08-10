import React from "react";

import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import DatePicker from "@/components/inputDate";
import { Input } from "@/components/ui/input";

import { ImportIcon, AtSignIcon, HashIcon } from "lucide-react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface CampaignEditProps {
  isOpen: boolean;
  setIsOpen: any;
}

const modalFormSchema = z.object({
  data: z
    .date()
    .default(new Date())
    .refine((val) => val instanceof Date, {
      message: "Data é obrigatória",
    }),
});

const CampaignEdit: React.FC<CampaignEditProps> = ({ isOpen, setIsOpen }) => {
  const methods = useForm<any>({
    resolver: zodResolver(modalFormSchema),
  });

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <FormProvider {...methods}>
        <SheetContent className="filter-container pl-5 w-[40%] sm:w-[95%] center-col !justify-start !items-start font-poppins_light">
          <div className="w-full center !justify-start space-x-2 font-poppins border border-solid border-transparent border-b-gray-300">
            <h3 className="text-[28px]">Editar</h3>
            <span className="translate-y-1">#21313123</span>
          </div>

          <div className="center-col filter-group !items-start space-y-2">
            <h3>Configurações</h3>
            <div className="center border border-solid border-gray-300 rounded-[8px] min-w-[280px] h-[45px] pr-1">
              <AtSignIcon strokeWidth={1} className="mx-4" />
              <Input
                value={"@grapadigital"}
                className="focus-visible:ring-0 min-w-[200px] h-[35px] focus-visible:ring-gray-300 outline-none"
              />
            </div>
            <div className="center border border-solid border-gray-300 rounded-[8px] min-w-[280px] h-[45px] pr-1">
              <HashIcon strokeWidth={1} className="mx-4" />
              <Input
                value={"GRAPA"}
                className="focus-visible:ring-0 min-w-[200px] h-[35px] focus-visible:ring-gray-300 outline-none"
              />
            </div>
            <div className="center border border-solid border-gray-300 rounded-[8px] min-w-[280px] h-[45px] pr-1">
              <span className="mx-4"> Tipo</span>
              <Select>
                <SelectTrigger className="min-w-[200px] h-[35px] focus-visible:ring-0 focus-visible:ring-gray-300 outline-none">
                  <SelectValue placeholder="Mock" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <DatePicker label="Data:" name="data" classname="max-h-[45px]" />
          </div>

          <div className="absolute bottom-5 space-x-3 h-[55px] center">
            <Button variant={"outline"} className="h-full">
              <span>Voltar</span>
            </Button>
            <Button className="h-full w-[120px] space-x-4 bg-[#9558f7] hover:bg-[#9558f7]">
              <span>Salvar</span>
              <ImportIcon strokeWidth={1} />
            </Button>
          </div>
        </SheetContent>
      </FormProvider>
    </Sheet>
  );
};

export default CampaignEdit;
