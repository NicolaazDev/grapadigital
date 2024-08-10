import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { SlSocialInstagram } from "react-icons/sl";

const CampaignItem = ({ onClick }: { onClick?: () => void }) => {
  return (
    <li
      onClick={onClick}
      className="border-[1px] cursor-pointer relative font-poppins_light shadow-lg py-1 px-3 h-[150px] md:h-[120px] sm:pb-3 sm:h-auto w-full center sm:center-col sm:!items-start !justify-start border-gray-300 rounded-[8px]"
    >
      <Image
        src="https://w3collective.com/wp-content/uploads/2021/03/skeleton-screen-animation.gif"
        alt="campaign"
        height={90}
        width={90}
        className="w-auto h-[90%] object-cover rounded-[8px] border-[1px] sm:w-[100%] border-gray-200 border-solid "
      />

      <div className="center-col ml-4 space-y-2 !items-start">
        <h2 className="font-black text-[20px]">Campanha De teste</h2>
        <div className="center text-gray-600 sm:center-col">
          <span>06/06/2022 - 02/07/2022</span>
          <Separator
            orientation="vertical"
            className="mx-3 h-[20px] w-[1px] bg-gray-700 sm:hidden"
          />
          <span>Beatriz Amorin</span>
        </div>
        <div className="center space-x-3 tags whitespace-nowrap sm:center-col sm:!space-x-0 sm:!items-start sm:space-y-2">
          <span className="archived">Arquivada</span>
          <span>Perfils Recrutados 0 / 10</span>
          <span className="md:hidden sm:hidden">
            Conteúdos Realizados 0 / 210
          </span>
        </div>
      </div>

      <div className="absolute sm:hidden right-5 top-5 h-[45px] text-[30px] bg-gray-100 rounded-[8px] w-[45px] center">
        <SlSocialInstagram strokeWidth={1} />
      </div>
    </li>
  );
};

export default CampaignItem;
