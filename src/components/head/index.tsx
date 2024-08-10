import React from "react";

interface PageHeadProps {
  title: string;
  subtitle?: string;
}

const PageHead: React.FC<PageHeadProps> = ({ title, subtitle }) => {
  return (
    <div className="w-full font-poppins center !justify-start ">
      <div className="center ">
        <h1 className="text-[3.4rem] md:text-[2.5rem] sm:text-[1.9rem] sm:leading-[1.9rem] sm:mt-10 font-[900] leading-[3.4rem]">
          {title}
        </h1>
        {subtitle && (
          <p className="text-[1.1rem] opacity-80 sm:text-[0.7rem] sm:hidden md:hidden leading-[1.1rem] ml-2 translate-y-2">
            / {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHead;
