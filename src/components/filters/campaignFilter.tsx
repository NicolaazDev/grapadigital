import React from "react";
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

interface FilterCampaignProps {
  isOpen: boolean;
  setIsOpen: any;
}

const FilterCampaign: React.FC<FilterCampaignProps> = ({
  isOpen,
  setIsOpen,
}) => {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="filter-container pl-5 w-[40%] center-col !justify-start !items-start font-poppins_light">
        <div className="w-full font-poppins border border-solid border-transparent border-b-gray-300">
          <h3 className="text-[28px]">Filtros</h3>
        </div>
        <div className="center-col filter-group !items-start">
          <h3>Redes sociais:</h3>
          <ToggleGroup type="multiple">
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
          <ToggleGroup type="multiple">
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
          <ToggleGroup type="multiple">
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
          <ToggleGroup type="multiple">
            <ToggleGroupItem value="excluidos">
              <span>Excluidos</span>
            </ToggleGroupItem>
            <ToggleGroupItem value="oportunidades">
              <span>Oportunidades</span>
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <div className="absolute bottom-5 space-x-3 h-[55px] center">
          <Button variant={"outline"} className="h-full space-x-4">
            <FilterXIcon strokeWidth={1} />
            <span>Remover Filtros</span>
          </Button>
          <Button className="h-full w-[120px] bg-[#9558f7]">Aplicar </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default FilterCampaign;
