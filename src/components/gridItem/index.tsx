"use client";

import { CalendarFold, Heart, MessageCircle } from "lucide-react";
import Image from "next/image";

interface GridItemProps {
  imageUrl: string;
  date: string;
  likes: number;
  comments: number;
  onClick?: () => void;
}

const GridItem = ({
  imageUrl,
  date,
  likes,
  comments,
  onClick,
}: GridItemProps) => {
  return (
    <div
      className="h-[310px] w-full relative bg-#5c5252 rounded-[8px] shadow-md cursor-pointer"
      onClick={onClick}
    >
      <Image
        src={imageUrl}
        alt="recipe image"
        width={310}
        height={310}
        className="absolute z-[0] h-full w-full object-cover rounded-[8px]"
      />
      <div
        className="absolute center pb-4 !items-end bg-gradient-to-t from-[#000000] via-[#000000b6] to-[#00000000] top-0 w-full h-full z-20 rounded-[8px]"
        aria-hidden="true"
      >
        <div className={`center space-x-4`}>
          <div className="flex items-center">
            <CalendarFold size={18} className="mr-2 text-[#F3F3F3]" />
            <p className="text-sm font-medium text-[#C6C6C6]">{date}</p>
          </div>
          <div className="flex items-center">
            <Heart size={18} className="mr-2 text-[#F3F3F3]" />
            <p className="text-sm font-medium text-[#C6C6C6]">{likes}</p>
          </div>
          <div className="flex items-center">
            <MessageCircle size={18} className="mr-2 text-[#F3F3F3]" />
            <p className="text-sm font-medium text-[#C6C6C6]">{comments}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridItem;
