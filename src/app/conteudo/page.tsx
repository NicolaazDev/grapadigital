import { Grid } from "@/components/grid";
import GridItem from "@/components/gridItem";
import { ModalUpload } from "@/components/modalUpload";
import { Jost } from "next/font/google";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});

import { BsCalendar2Date } from "react-icons/bs";
import { IoGridOutline } from "react-icons/io5";
import { RiSearch2Line } from "react-icons/ri";

const mockedGridItems = Array.from({ length: 10 }, (_, i) => ({
  imageUrl: `https://picsum.photos/id/${i + 1}/300/300`,
  date: new Date(2022, 0, i + 1).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }),
  likes: Math.floor(Math.random() * 1000),
  comments: Math.floor(Math.random() * 1000),
}));

const ConteudoPage = () => {
  return (
    <div className="center-col py-[110px] px-10 relative overflow-x-hidden">
      <div className="background w-[100vw] h-[100vh] mix-blend-luminosity flex [&>svg]:scale-[1.5] sm:[&>svg]:scale-[1.1] sm:top-[-80px] z-[-1] items-start !justify-between absolute top-0 left-0">
        <svg
          width="246"
          height="257"
          viewBox="0 0 246 257"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.31">
            <path
              d="M-99.6359 -29.6353C-98.0362 -31.4654 -96.5354 -33.4496 -95.1753 -35.5196L-92.4709 -39.9499C-85.2743 -49.6839 -77.1477 -58.5695 -68.3279 -66.3771C-29.4561 -101.121 23.08 -117.14 75.2898 -111.278L-2.97129 16.9286C-3.55377 17.8828 -4.13625 18.837 -4.67713 19.7231C-5.30122 20.7455 -5.99561 21.725 -6.61971 22.7473C-18.0572 39.9031 -32.0608 54.4634 -47.7765 66.2945L8.26629 100.505C20.7827 108.145 35.0291 110.105 48.0825 107.221C61.4014 104.218 73.4412 96.037 80.7738 83.3923C94.9686 59.0317 85.6509 27.3353 60.8992 12.2262L32.4911 -5.11497C54.346 -11.9823 79.2843 -9.67003 100.801 3.4646C147.211 31.7942 156.445 97.3069 111.608 134.865C91.1057 152.008 60.2324 161.79 36.3721 148.067C24.9133 141.54 15.2957 135.95 5.25612 130.102C-9.36986 121.174 -32.7901 103.884 -61.4975 106.007C-96.2545 108.553 -104.623 121.314 -132.458 166.912C-133.207 168.139 -42.021 223.521 -35.8331 227.298C57.5897 284.233 169.362 254.976 221.227 167.164C271.428 82.0792 241.883 -30.1671 155.122 -83.7837C129.961 -99.3295 102.754 -108.36 75.4146 -111.483C23.2048 -117.344 -29.3313 -101.326 -68.2031 -66.5816C-77.0229 -58.774 -85.1079 -49.9565 -92.3461 -40.1544L-95.0505 -35.724C-96.3819 -33.543 -97.841 -31.627 -99.5111 -29.8398L-99.7192 -29.499C-99.6775 -29.5671 -99.6359 -29.6353 -99.6359 -29.6353Z"
              fill="#46B8AA"
            />
          </g>
        </svg>

        <svg
          width="553"
          height="275"
          viewBox="0 0 553 275"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.31">
            <path
              d="M139.058 -71.8826C140.35 -70.8087 141.642 -69.7349 142.939 -68.5215L143.155 -68.3193C143.876 -67.6452 144.596 -66.971 145.249 -66.2248C155.727 -55.4733 161.915 -41.2929 163.17 -26.3163C164.564 -9.17881 170.42 7.6675 180.741 22.1966C181.619 23.4242 182.497 24.6518 183.443 25.8073C143.921 41.3301 100.876 45.1668 59.5526 37.4884C55.1947 36.6584 50.9044 35.7562 46.5375 34.6471C41.0193 17.4401 37.5763 -0.396271 36.2941 -18.3758C32.4021 -73.7101 96.9642 -105.452 139.058 -71.8826Z"
              fill="#4F5187"
            />
          </g>
          <g opacity="0.31">
            <path
              d="M319.741 45.629L321.024 44.2581C321.699 43.5366 322.442 42.743 323.117 42.0215C323.117 42.0215 323.185 41.9494 323.252 41.8772C325.638 40.0498 327.947 38.0154 330.111 35.8462L334.5 31.1565C345.63 21.1383 357.639 12.3477 370.184 5.00595C425.562 -27.7511 492.178 -34.9727 552.586 -16.0667L425.597 119.646C424.652 120.656 423.707 121.666 422.829 122.604C421.817 123.686 420.732 124.701 419.719 125.783C401.581 143.724 381.087 157.972 359.288 168.562L323.339 134.924C297.98 111.195 296.054 71.2324 319.741 45.629Z"
              fill="#1D71B8"
            />
          </g>
          <g opacity="0.31">
            <path
              d="M46.4691 34.7192C50.764 35.7609 55.1264 36.7305 59.4842 37.5605C100.879 45.3062 143.92 41.3301 183.374 25.8794C186.508 29.8945 190.057 33.7559 193.947 37.3961C230.04 71.1689 284.777 72.454 322.369 42.6759C322.369 42.6759 322.369 42.6759 322.437 42.6038C322.711 42.4547 322.914 42.2383 323.188 42.0893C322.513 42.8108 321.771 43.6044 321.096 44.3259L319.813 45.6967C296.193 71.2281 297.979 111.195 323.41 134.991L359.359 168.63C359.292 168.702 359.152 168.706 359.085 168.779C324.969 185.166 287.489 192.586 250.34 190.843C231.379 189.88 212.624 186.675 194.418 181.006C162.809 171.321 132.851 154.385 107.06 130.252C78.8915 103.894 58.9241 71.9491 47.4736 37.6889L47.4016 37.6215C47.1628 36.7215 46.7799 35.6866 46.4691 34.7192Z"
              fill="#36A9E1"
            />
          </g>
        </svg>

        <svg
          width="371"
          height="226"
          viewBox="0 0 371 226"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.31">
            <path
              d="M21.795 108.996C60.5157 91.1843 104.554 102.273 132.556 136.949C149.209 162.315 170.706 182.547 195.024 197.225C219.343 211.902 246.459 221.144 274.4 224.292C290.156 226.082 306.114 225.991 321.965 224.017C350.496 220.401 378.688 210.325 404.304 193.508C450.368 163.266 479.553 116.856 489.114 66.6708C488.995 66.646 488.876 66.6212 488.757 66.5965C488.782 66.4775 488.807 66.3586 488.831 66.2396C488.593 66.1901 488.474 66.1654 488.236 66.1159C439.864 54.9934 395.751 25.6496 366.816 -19.5194C339.06 -62.892 330.547 -113.551 339.352 -160.977C339.376 -161.096 339.401 -161.215 339.425 -161.334C339.188 -161.384 339.069 -161.408 338.831 -161.458C338.88 -161.696 338.904 -161.815 338.954 -162.053C290.817 -172.816 238.731 -165.665 193.923 -138.202C150.526 -111.562 121.259 -71.0616 108.158 -25.9561L108.133 -25.8371C106.039 -18.7041 99.578 -13.845 92.2438 -14.0686C89.767 -14.0878 87.2902 -14.1071 84.8605 -14.0544C84.8605 -14.0544 84.7416 -14.0792 84.6699 -14.0321C69.4953 -13.53 54.3422 -8.92889 40.7813 -0.0259411C1.24649 25.9293 -12.4728 74.6284 13.521 114.222L21.795 108.996ZM221.929 71.4877C200.826 34.3388 210.634 -13.4373 244.712 -39.1012C285.54 -69.8125 343.461 -58.3778 369.716 -14.9453C392.743 23.1002 382.397 73.1838 346.292 99.0464C304.972 128.539 247.153 116.008 221.929 71.4877Z"
              fill="#F39200"
            />
          </g>
        </svg>
      </div>

      <div className={`${jost.className} center-col !items-start`}>
        <span className="font-extrabold text-[86px] md:text-[76px] sm:text-[46px] sm:text-center">
          Influênciadores
        </span>
        <span className="font-extralight text-[27px] leading-[33px] max-w-[53%] md:max-w-[80%] sm:max-w-[95%] sm:text-center">
          Gerencie e descubra conteúdos de influenciadores com a GrapaDigital.
          Utilize nossa pesquisa avançada e filtros personalizados para
          encontrar e organizar vídeos, TikToks, Reels e muito mais.
        </span>
      </div>
      <div className="center w-full mt-14 ">
        <div className="center !justify-start w-full space-x-4 md:center-col sm:center-col md:space-y-2 md:space-x-0 sm:space-y-2 sm:space-x-0">
          <div className="center w-[50%] md:w-[100%] sm:w-full">
            <input
              type="text"
              placeholder="Busque por @, # ou palavra-chave"
              className="w-[100%] p-2 border h-[55px] border-[#9C9C9C] rounded-[8px] outline-none"
            />
            <button className="border-[#36A9E1] border-solid ml-2 border-[1px] p-2 rounded-[8px] min-w-[100px] h-[55px] center px-8 text-[#36A9E1]">
              <RiSearch2Line />
            </button>
          </div>

          <button className="bg-[#36A9E1] p-2 rounded-[8px] min-w-[100px] h-[55px] center px-8 text-white md:w-[100%]  sm:w-[100%]">
            <IoGridOutline />
          </button>
          <button className="bg-[#36A9E1] p-2 rounded-[8px] min-w-[100px] h-[55px] center px-8 text-white sm:w-[100%]  md:w-[100%]">
            <BsCalendar2Date />
          </button>

          <ModalUpload />
        </div>
      </div>
      <p className="text-[--app-gray-900]  font-[500] text-[18px] w-full text-start mt-7">
        17.123 de 192.231 Influenciadores:
      </p>
      <Grid className="mt-6">
        {mockedGridItems.map((item) => (
          <GridItem
            key={item.imageUrl}
            imageUrl={item.imageUrl}
            date={item.date}
            likes={item.likes}
            comments={item.comments}
          />
        ))}
      </Grid>
    </div>
  );
};

export default ConteudoPage;
