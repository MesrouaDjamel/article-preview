import Image from "next/image";
import { useState } from "react";
import ShareComponent from "./ShareComponent";
import BtnShareOnDesktop from "./BtnShareOnDesktop";
import BtnShardOnViewMobile from "./BtnShardOnViewMobile";

const ArticleCard = () => {
  
  return (
    <div className="w-[327px] relative h-[512px] md:w-[730px] md:h-[288px] bg-white rounded-lg flex flex-col md:flex-row ">
      {/* Image container */}
      <div className="relative h-[200px] md:h-[288px] md:w-[285px]  ">
        <Image
          src={"/drawers.jpg"}
          alt="image-currency"
          fill
          className="rounded-t-lg md:rounded-none md:rounded-l-lg"
        />
      </div>
      {/* Text container */}
      <div className="flex flex-col px-8 md:px-10 pt-10 md:pt-8 md:w-[445px] ">
        <h1 className="text-veryDarkGrayishBlue font-bold  text-[16px] md:text-[20px] ">
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h1>
        <p className="text-[13px] text-grayishBlue font-semibold tracking-[0.01em] pt-5 pb-5">
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>



        

        <BtnShardOnViewMobile/>
        <BtnShareOnDesktop />
      </div>
    </div>
  );
}

export default ArticleCard


