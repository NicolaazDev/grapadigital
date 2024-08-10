"use client";

import React, { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import UserContent from "@/components/userContent";

import {
  HomeIcon,
  MegaphoneIcon,
  UserRoundSearchIcon,
  PackageIcon,
  UsersRoundIcon,
  ChevronLeftIcon,
} from "lucide-react";

import { usePathname, useRouter } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navigation = (path: string) => {
    router.push(path);
  };

  if (pathname === "/login") {
    return null;
  }

  return (
    <div
      className={`bg-[#121518] sidebar duration-200 w-full  max-w-[320px] transition-all relative h-screen center-col ${
        isOpen ? "min-w-[320px] sm:!min-w-[100vw] fixed" : "min-w-[100px] close"
      } py-4 px-2`}
    >
      <img
        src={
          isOpen
            ? "https://res.cloudinary.com/dmceve2cp/image/upload/v1723163594/imagem_2024-08-08_213311014_w1dhir.png"
            : "https://res.cloudinary.com/dmceve2cp/image/upload/v1723163610/imagem_2024-08-08_213329234_s3whv8.png"
        }
        alt="logo"
        className={`${isOpen ? "w-[200px]" : "w-[50px]"} absolute top-8 mt-5`}
      />
      <div
        onClick={toggleSidebar}
        className={`absolute cursor-pointer z-20 ${
          isOpen ? "sm:!right-4" : ""
        } top-[60px] -right-4 h-8 w-8 bg-[#121518] center rounded-[8px] border-[1px] border-solid border-accent text-accent`}
      >
        <ChevronLeftIcon
          size={18}
          className={`transition-all ${!isOpen ? "rotate-180" : ""}`}
        />
      </div>
      <div className="center-col max-w-[250px] w-full text-[#cce4ff] space-y-2">
        <Button
          className={`nav-button ${pathname === "/" ? "active" : ""}`}
          variant={"ghost"}
          onClick={() => navigation("/")}
        >
          <HomeIcon strokeWidth={1} size={25} /> {isOpen && <span>Home</span>}
        </Button>

        <Button
          className={`nav-button ${pathname === "/conteudo" ? "active" : ""}`}
          variant={"ghost"}
          onClick={() => navigation("/conteudo")}
        >
          <PackageIcon strokeWidth={1} size={25} />{" "}
          {isOpen && <span>Conteudo</span>}
        </Button>

        <Button
          className={`nav-button ${
            pathname === "/influenciadores" ? "active" : ""
          }`}
          variant={"ghost"}
          onClick={() => navigation("/influenciadores")}
        >
          <UserRoundSearchIcon strokeWidth={1} size={25} />{" "}
          {isOpen && <span>Influenciadores</span>}
        </Button>

        <Accordion type="single" collapsible className="w-full submenu">
          {isOpen ? (
            <AccordionItem
              className={`nav-button accordion ${
                pathname === "/campanhas" ? "active" : ""
              } !items-start hover:bg-accent hover:text-accent-foreground`}
              value="item-1"
            >
              <div className="center">
                <MegaphoneIcon strokeWidth={1} size={25} className="mr-3" />
                <AccordionTrigger
                  onClick={() => navigation("/campanhas")}
                  className="w-full !h-[44px]  hover:no-underline"
                >
                  <span className="mr-3">Campanhas</span>
                </AccordionTrigger>
              </div>

              <AccordionContent className="center-col mt-3 font-poppins_light w-full !items-start space-y-2">
                <span
                  onClick={() => navigation("/campanhas")}
                  className="hover:underline cursor-pointer"
                >
                  Minhas Campanhas
                </span>
                <span
                  onClick={() => navigation("/projetos")}
                  className="hover:underline cursor-pointer"
                >
                  Projetos
                </span>
              </AccordionContent>
            </AccordionItem>
          ) : (
            <Button
              className={`nav-button ${
                pathname === "/campanhas" ? "active" : ""
              }`}
              variant={"ghost"}
              onClick={() => navigation("/campanhas")}
            >
              <MegaphoneIcon strokeWidth={1} size={25} />{" "}
            </Button>
          )}
        </Accordion>

        <Button
          className={`nav-button ${pathname === "/clientes" ? "active" : ""}`}
          variant={"ghost"}
          onClick={() => navigation("/clientes")}
        >
          <UsersRoundIcon strokeWidth={1} size={25} />
          {isOpen && <span>Clientes</span>}
        </Button>
      </div>
      <UserContent isOpen={isOpen} />
    </div>
  );
};

export default Sidebar;
