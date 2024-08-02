"use client";

import Header from "@/components/header";
import NavIndicator from "@/components/navIndicator";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="overflow-hidden relative flex flex-col items-start h-screen max-w-screen-2xl w-full text-white md:items-center">
      <Header />
      <div className="flex justify-between items-center h-screen sm:items-start sm:pt-[105px] w-full md:flex-col md:justify-start sm:justify-start md:pt-[105px] xl2:px-[40px]">
        <NavIndicator className="left-0 md:hidden sm:hidden" />

        <div className="flex flex-col items-start ml-4 md:items-center md:justify-start sm:justify-start">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[56px] font-black leading-[61px] text-[--app-gray-900] lg:text-[36px] lg:leading-[46px] xl2:text-[44px] xl2:leading-[54px] md:text-center md:text-[46px] md:leading-[48px]  sm:text-center sm:text-[46px] sm:leading-[48px]"
          >
            AGÊNCIA DE MARKETING <br /> & INFLUÊNCIA
          </motion.h1>
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[34px] mt-6 font-extralight leading-[41px] max-w-[90%] text-[--app-gray-500] md:text-[24px] sm:text-[24px] md:leading-[28px] sm:leading-[28px] lg:text-[24px] lg:leading-[28px] xl2:text-[30px] xl2:leading-[32px] md:text-center sm:text-center"
          >
            A Grapa Digital conecta influenciadores famosos e marcas através de
            estratégias de marketing inovadoras e eficazes. Junte-se a nós e
            impulsione sua presença digital.
          </motion.span>
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-[50px] px-4 py-2 bg-[#ffff] border border-solid border-[#38AA43] text-[#38AA43] rounded-[8px] h-[55px] w-[50%] lg:w-[80%] md:z-40 sm:z-40 sm:w-[90%]"
          >
            Conheça Mais
          </motion.button>
        </div>

        <img
          src="/assets/images/imageHero.jpg"
          alt="Hero Image"
          className="w-[600px] h-[600px] object-cover rounded-full lg:w-[400px] lg:h-[400px] xl2:w-[600px] xl2:h-[600px] md:absolute md:bottom-[-40%] md:z-[0] md:w-[700px] md:h-[700px] sm:absolute sm:bottom-[-40%] sm:z-[0] sm:w-[700px] sm:h-[700px]"
        />
      </div>
      <div className="fixed inset-0 min-w-[100vw]  h-full overflow-hidden z-[-1] bg-pattern [&>svg]:opacity-70">
        <svg
          width="342"
          height="316"
          viewBox="0 0 342 316"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0"
        >
          <path
            d="M-31.9586 209.819C-53.7057 175.162 -60.9792 129.705 -37.0519 101.783C-12.8964 74.0134 42.2317 63.6259 76.656 47.6648C111.005 31.3228 124.649 9.40719 147.656 -10.2172C170.435 -29.994 202.577 -47.4797 238.056 -49.2032C273.155 -50.851 311.819 -36.5842 328.927 -8.32574C345.959 19.552 341.663 61.5739 337.372 97.6575C333.08 133.741 328.488 164.343 314.462 188.314C300.282 212.513 276.743 230.462 251.297 253.739C225.851 277.016 199.106 305.697 167.353 313.209C135.752 320.494 99.2954 306.381 63.0709 287.472C26.6182 268.411 -9.98323 244.629 -31.9586 209.819Z"
            fill="#F5F5F5"
          />
        </svg>
        <svg
          width="404"
          height="342"
          viewBox="0 0 404 342"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 right-[-100px]"
        >
          <path
            d="M15.2963 64.7625C32.1091 27.4612 65.9299 -3.76993 102.43 0.688884C138.93 5.4222 178.11 45.571 210.465 65.3942C243.095 84.9435 268.899 84.1672 297.981 92.4554C327.064 100.469 359.423 117.547 380.508 146.134C401.318 174.446 410.852 214.54 396.798 244.435C383.018 274.056 345.65 293.752 313.229 310.162C280.808 326.573 252.785 339.698 225.058 341.294C197.056 342.89 169.074 333.231 135.6 324.935C102.127 316.638 63.4336 310.254 39.5929 287.976C16.0266 265.698 7.58694 227.527 3.2693 186.893C-1.04784 145.985 -1.51695 102.338 15.2963 64.7625Z"
            fill="#F5F5F5"
          />
        </svg>
        <svg
          width="926"
          height="842"
          viewBox="0 0 926 842"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[-200px] right-[100px] scale-[1.3]"
        >
          <path
            d="M344.536 266.507C365.125 251.847 415.724 284.091 463.379 290.645C511.346 297.35 556.057 278.215 604.45 281.661C652.53 284.956 704.141 311.143 708.794 349.985C713.597 388.515 671.442 439.698 640.901 477.26C610.671 514.972 592.055 539.062 575.619 576.918C559.496 614.925 545.392 666.235 511.979 697.012C478.406 727.326 425.524 737.107 387.309 716.647C349.095 696.186 325.709 645.947 309.067 602.446C291.963 559.106 281.604 522.502 288.505 490.805C295.095 458.957 319.097 431.703 326.312 387.449C333.527 343.195 323.947 281.168 344.536 266.507Z"
            fill="#F5F5F5"
          />
        </svg>
        <svg
          width="404"
          height="342"
          viewBox="0 0 404 342"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-[400px] scale-[1.6]"
        >
          <path
            d="M15.2963 64.7625C32.1091 27.4612 65.9299 -3.76993 102.43 0.688884C138.93 5.4222 178.11 45.571 210.465 65.3942C243.095 84.9435 268.899 84.1672 297.981 92.4554C327.064 100.469 359.423 117.547 380.508 146.134C401.318 174.446 410.852 214.54 396.798 244.435C383.018 274.056 345.65 293.752 313.229 310.162C280.808 326.573 252.785 339.698 225.058 341.294C197.056 342.89 169.074 333.231 135.6 324.935C102.127 316.638 63.4336 310.254 39.5929 287.976C16.0266 265.698 7.58694 227.527 3.2693 186.893C-1.04784 145.985 -1.51695 102.338 15.2963 64.7625Z"
            fill="#F5F5F5"
          />
        </svg>
      </div>
    </section>
  );
}
