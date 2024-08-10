"use client";

import { Grid } from "@/components/grid";
import GridItem from "@/components/gridItem";
import PageHead from "@/components/head";
import InputWithButton from "@/components/inputButton";
import { ModalUpload } from "@/components/modalUpload";
import { Button } from "@/components/ui/button";

import Image from "next/image";

import { SearchIcon, LayoutGridIcon, CalendarIcon } from "lucide-react";
import { useState } from "react";

const mockedGridItems = Array.from({ length: 20 }, (_, i) => ({
  imageUrl: `https://mocks.elevenplusexams.co.uk/assets/uncompiled/online_mocks1.jpg?t=3654667474`,
  date: new Date(2022, 0, i + 1).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }),
  likes: Math.floor(Math.random() * 1000),
  comments: Math.floor(Math.random() * 1000),
}));

const ConteudoPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="center-col  font-poppins_light w-full max-h-screen py-5 pl-7 px-4 relative overflow-x-hidden">
      <PageHead title="Conteúdo" />
      <div className="w-full center mt-6 !justify-end space-x-2 sm:mt-7 md:mt-4 h-[60px] md:h-auto sm:h-auto md:space-y-2 md:center-col sm:center-col">
        <InputWithButton
          icon={<SearchIcon size={20} strokeWidth={1} />}
          className="min-w-[25%] md:w-full !h-full md:!h-[55px] sm:w-full sm:!h-[50px]"
          placeholder="Busque por @, # ou palavra-chave"
          onClick={(value) => console.log(value)}
        />
        <div className="center  space-x-2 h-[60px] sm:!ml-0 sm:mt-1 sm:h-auto sm:w-full sm:grid sm:grid-cols-2 sm:grid-rows-[50px_50px] sm:gap-1">
          <Button
            variant={"outline"}
            className="center sm:w-full sm:!ml-0 h-full  w-[60px]"
          >
            <LayoutGridIcon strokeWidth={1} />
          </Button>
          <Button className="center h-full sm:w-full sm:!ml-0 bg-[#5f84ff] w-[60px]">
            <CalendarIcon strokeWidth={1} />
          </Button>
          <ModalUpload
            className="w-[30%] sm:!ml-0 sm:!min-w-full sm:col-span-2"
            open={open}
            setOpen={setOpen}
          />
        </div>
      </div>
      <p className="text-[--app-gray-900]  font-[500] text-[18px] w-full text-start mt-7">
        17.123 de 192.231 Influenciadores:
      </p>
      <Grid className="mt-6 overflow-y-scroll">
        {mockedGridItems.map((item) => (
          <GridItem
            key={item.imageUrl}
            imageUrl={item.imageUrl}
            date={item.date}
            likes={item.likes}
            comments={item.comments}
            onClick={() => {
              setOpen(true);
            }}
          />
        ))}
      </Grid>
    </div>
  );
};

export default ConteudoPage;
