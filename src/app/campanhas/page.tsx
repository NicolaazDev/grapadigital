"use client";

import React, { useState } from "react";

import CampaignItem from "@/components/campaignItem";
import PageHead from "@/components/head";
import InputWithButton from "@/components/inputButton";
import VerticalList from "@/components/verticalList";
import FilterCampaign from "@/components/sheets/campaignFilter";

import { SearchIcon, FilterIcon, DiamondPlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function MinhasCampanhas() {
  const handleSearch = (value: string) => {
    console.log(value);
  };

  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleOpenItem = () => {
    setIsOpen(!isOpen);
  };

  const handleClickCampaign = () => {
    router.push("campanhas/12313213");
  };

  return (
    <div className="center-col w-full h-screen font-poppins_light sm:items-start py-5 pl-7 px-4">
      <PageHead title="Campanhas" subtitle="Minhas Campanhas" />
      <div className="w-full center mt-5 !justify-start space-x-2 sm:space-y-2 sm:!space-x-0 min-h-[60px] sm:min-h-fit sm:center-col">
        <InputWithButton
          value=""
          icon={<SearchIcon size={20} strokeWidth={1} />}
          className="min-w-[25%] md:min-w-[300px] sm:min-w-[100px] !h-full sm:w-full"
          placeholder="Nome da campanha ou #ID"
          onClick={handleSearch}
        />
        <Button
          variant={"outline"}
          onClick={handleOpenItem}
          className="center h-full space-x-4 sm:w-full"
        >
          <FilterIcon strokeWidth={1} />
          <span>Filtros</span>
        </Button>
        <Button className="center h-full bg-[#5f84ff] space-x-4 pl-6 sm:w-full">
          <span>Nova Campanha</span>
          <DiamondPlusIcon strokeWidth={1} />
        </Button>
      </div>
      <VerticalList>
        {Array.from({ length: 10 }).map((_, i) => (
          <CampaignItem onClick={handleClickCampaign} key={i} />
        ))}
      </VerticalList>
      <FilterCampaign isOpen={isOpen} setIsOpen={handleOpenItem} />
    </div>
  );
}
