"use client";

import React, { useState } from "react";
import PageHead from "@/components/head";

import { FaInstagram } from "react-icons/fa6";

import {
  CalendarFoldIcon,
  CalendarCheck2Icon,
  HashIcon,
  AtSignIcon,
} from "lucide-react";

import { Separator } from "@/components/ui/separator";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CampaignEdit from "@/components/sheets/campaignEdit";

const PainelControl = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenItem = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <CampaignEdit isOpen={isOpen} setIsOpen={handleOpenItem} />
      <ul className="grid  grid-cols-4 lg:grid-cols-3 h-auto md:grid-cols-1 sm:grid-cols-1 overflow-y-auto space-x-2 md:space-x-0 sm:space-x-0 md:space-y-2 sm:space-y-2">
        {Array.from({ length: 1 }, (_, i) => (
          <Card key={i} onClick={handleOpenItem} className="py-3">
            <CardHeader className="space-y-4">
              <CardTitle>Configuração 1</CardTitle>
              <CardDescription>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
                temporibus repellendus.
              </CardDescription>
            </CardHeader>

            <CardFooter className="w-full !justify-end">
              <Button className="h-full w-[120px] hover:bg-[#9558f7] bg-[#9558f7]">
                Editar{" "}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </ul>
    </div>
  );
};

export default function CampanhaPage() {
  return (
    <div className="center-col w-full h-screen font-poppins_light sm:items-start py-5 pl-7 px-4 overflow-y-auto">
      <PageHead title="Campanha Teste Grapa" subtitle="#123123123123" />
      <div className="w-full center md:center-col md:!items-start md:space-y-2 sm:center-col sm:!items-start sm:space-y-2  mt-4 !justify-start">
        <div className="center !w-auto space-x-3 tags tags-page whitespace-nowrap sm:center-col sm:!space-x-0 sm:!items-start sm:space-y-2">
          <span className="archived">Arquivada</span>
          <span className="social">
            <FaInstagram />
            <p>Instagram</p>
          </span>
        </div>
        <Separator
          className="h-[80%] mx-3 md:hidden sm:hidden w-[1px] bg-gray-700"
          orientation="vertical"
        />
        <div className="center sm:center-col sm:!items-start sm:space-x-0 sm:space-y-2 space-x-2 text-gray-800">
          <div className="center space-x-2">
            <CalendarFoldIcon strokeWidth={1} />
            <span>Inicio: 01/01/2022</span>
          </div>
          <div className="center space-x-2">
            <CalendarCheck2Icon strokeWidth={1} />
            <span>Fim: 01/01/2022</span>
          </div>
          <div className="center space-x-2">
            <HashIcon strokeWidth={1} />
            <span>GRAPA</span>
          </div>
          <div className="center space-x-2">
            <AtSignIcon strokeWidth={1} />
            <span>GrapaDigital</span>
          </div>
        </div>
      </div>
      <Separator className="mt-3" />
      <Tabs defaultValue="painel" className="w-full mt-5 h-full tabs-camp">
        <TabsList className="sm:center-col h-auto">
          <TabsTrigger value="painel" className="w-full">
            Painel de controle
          </TabsTrigger>
          <TabsTrigger value="conteudo" className="w-full">
            Conteudo
          </TabsTrigger>
          <TabsTrigger value="recrutamento" className="w-full">
            Recrutamento
          </TabsTrigger>
          <TabsTrigger value="relatorios" className="w-full">
            Relátorios
          </TabsTrigger>
        </TabsList>
        <TabsContent value="painel" className="overflow-y-scroll ">
          <PainelControl />
        </TabsContent>
        <TabsContent value="conteudo"></TabsContent>
      </Tabs>
    </div>
  );
}
