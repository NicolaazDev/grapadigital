import { FormAuth } from "@/components/login/form";

import { Jost } from "next/font/google";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});

export default function LoginPage() {
  return (
    <div className="flex items-center justify-between h-screen lg:justify-center">
      <div className="min-h-screen w-full h-full relative lg:hidden">
        <img
          src="/assets/images/backgroundAuth.png"
          alt="login"
          className="w-full h-full object-cover z-[-1] absolute"
        />
        <div className="w-full h-full flex px-10 pb-14 justify-center items-end bg-gradient-to-t from-[#000000]  via-#000000-400 to-[#ffffff00] opacity-100 z-20">
          <div className="flex items-start justify-center w-full flex-col">
            <img
              src="/assets/images/logo.svg"
              alt="logo"
              className="w-[350px] mix-blend-luminosity opacity-80"
            />
            <span
              className={`text-[16px] font-[300] mt-4 w-[90%] text-start text-[#c0c0c0] lg:text-center`}
            >
              A Melhor agência especializada em marketing de influência.
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-[30%] max-w-[550px] min-w-[540px] h-full px-7 bg-[#ffffff] lg:w-[100%] lg:min-w-fit lg:max-w-[300px]">
        <div className="flex flex-col items-center justify-center gap-4 w-full ">
          <img src="/assets/images/logo.svg" alt="logo" className="w-[90%]" />
          <h1
            className={`text-[30px] font-[300] ${jost.className} text-[#131313]`}
          >
            Bem vindo de volta
          </h1>
          <FormAuth />
          <span
            className={`text-[16px] font-[300] w-[90%] text-center text-[#131313]`}
          >
            Se continuar, você concorda com os Termos de Serviço e Politica de
            Privacidade
          </span>
        </div>
      </div>
    </div>
  );
}
