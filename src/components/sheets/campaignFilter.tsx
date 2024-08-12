"use client";

import React, { useState } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Button } from "@/components/ui/button";

import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa6";

import { FilterXIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DatePicker from "../inputDate";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

interface FilterCampaignProps {
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

const FilterCampaign: React.FC<FilterCampaignProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const methods = useForm<any>({
    resolver: zodResolver(modalFormSchema),
  });

  const [socialMediaValue, setSocialMediaValue] = useState<string[]>([]);
  const [statusValue, setStatusValue] = useState<string[]>([]);
  const [solutionValue, setSolutionValue] = useState<string[]>([]);
  const [extraValue, setExtraValue] = useState<string[]>([]);

  const clearFilters = () => {
    setSocialMediaValue([]);
    setStatusValue([]);
    setSolutionValue([]);
    setExtraValue([]);
    methods.reset();
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <FormProvider {...methods}>
        <SheetContent className="filter-container pl-5 w-[40%] sm:w-[95%] center-col !justify-start !items-start font-poppins_light">
          <div className="w-full font-poppins border border-solid border-transparent border-b-gray-300">
            <h3 className="text-[28px]">Filtros</h3>
          </div>
          <div className="center-col filter-group !items-start">
            <h3>Redes sociais:</h3>
            <ToggleGroup
              value={socialMediaValue}
              onValueChange={setSocialMediaValue}
              type="multiple"
              className="flex-wrap !justify-start"
            >
              <ToggleGroupItem value="instagram">
                <FaInstagram />
                <span>Instagram</span>
              </ToggleGroupItem>
              <ToggleGroupItem value="twitter">
                <FaTwitter />
                <span>Twitter</span>
              </ToggleGroupItem>
              <ToggleGroupItem value="youtube">
                <FaYoutube />
                <span>Youtube</span>
              </ToggleGroupItem>
              <ToggleGroupItem value="linkedin">
                <FaLinkedin />
                <span>Linkedin</span>
              </ToggleGroupItem>
              <ToggleGroupItem value="tiktok">
                <FaTiktok />
                <span>Tiktok</span>
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div className="center-col filter-group !items-start">
            <h3>Status:</h3>
            <ToggleGroup
              value={statusValue}
              onValueChange={setStatusValue}
              type="multiple"
              className="flex-wrap !justify-start"
            >
              <ToggleGroupItem value="config">
                <span>Configuração</span>
              </ToggleGroupItem>
              <ToggleGroupItem value="recrutamento">
                <span>Recrutamento</span>
              </ToggleGroupItem>
              <ToggleGroupItem value="em-progresso">
                <span>Em Progresso</span>
              </ToggleGroupItem>
              <ToggleGroupItem value="finalizados">
                <span>Finalizados</span>
              </ToggleGroupItem>
              <ToggleGroupItem value="arquivadas">
                <span>Arquivadas</span>
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div className="center-col filter-group !items-start">
            <h3>Soluçao:</h3>
            <ToggleGroup
              value={solutionValue}
              onValueChange={setSolutionValue}
              type="multiple"
              className="flex-wrap !justify-start"
            >
              <ToggleGroupItem value="influenciadores">
                <span>Influenciadores</span>
              </ToggleGroupItem>
              <ToggleGroupItem value="seeding">
                <span>Seeding</span>
              </ToggleGroupItem>
              <ToggleGroupItem value="brand">
                <span>Brand Lovers</span>
              </ToggleGroupItem>
              <ToggleGroupItem value="performance">
                <span>Performace</span>
              </ToggleGroupItem>
              <ToggleGroupItem value="pesquisa">
                <span>Pesquisa</span>
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div className="center-col filter-group !items-start">
            <h3>Extras:</h3>
            <ToggleGroup
              value={extraValue}
              onValueChange={setExtraValue}
              type="multiple"
              className="flex-wrap !justify-start"
            >
              <ToggleGroupItem value="excluidos">
                <span>Excluidos</span>
              </ToggleGroupItem>
              <ToggleGroupItem value="oportunidades">
                <span>Oportunidades</span>
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div className="center-col filter-group !items-start">
            <h3>Clientes:</h3>
            <div className="center border border-solid border-gray-300 rounded-[8px] h-[45px] pr-1">
              <span className="mx-4"> Tipo</span>
              <Select>
                <SelectTrigger className="min-w-[200px] h-[35px] focus-visible:ring-0 focus-visible:ring-gray-500 outline-none">
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
          </div>

          <DatePicker label="Data:" name="data" classname="max-h-[45px]" />

          <div className="absolute bottom-5 space-x-3 h-[55px] center">
            <Button
              variant={"outline"}
              onClick={clearFilters}
              className="h-full space-x-4"
            >
              <FilterXIcon strokeWidth={1} />
              <span>Remover Filtros</span>
            </Button>
            <Button
              onClick={() => setIsOpen(false)}
              className="h-full w-[120px] bg-[#9558f7]"
            >
              Aplicar{" "}
            </Button>
          </div>
        </SheetContent>
      </FormProvider>
    </Sheet>
  );
};

export default FilterCampaign;
