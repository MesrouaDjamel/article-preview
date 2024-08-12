"use client"
import Image from "next/image";
import { useState } from "react";
import ShareComponent from "./ShareComponent";

const BtnShareOnDesktop = () => {
     const [isClicked, setiSClicked] = useState(false);
     const [btnShareColor, setBtnShareColor] = useState("bg-lightGrayishBlue");
     const [btnfillShareColor, setFillBtnShareColor] = useState("#6E8098");
  return (
    <div className=" items-center justify-between relative hidden md:flex">
      <div className="flex items-center gap-4">
        <Image
          src={"/avatar-michelle.jpg"}
          alt="avatar-michelle"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <span className="text-veryDarkGrayishBlue font-bold">
            Michelle Appleton
          </span>
          <span className="text-grayishBlue">28 Jun 2020</span>
        </div>
      </div>

      <div
        className={`p-2 ${btnShareColor} rounded-full  cursor-pointer md:hidden  `}
        onClick={() => {
          setiSClicked(!isClicked);
          if (btnShareColor === "bg-lightGrayishBlue") {
            setBtnShareColor("bg-desaturatedDarkBlue");
            setFillBtnShareColor("#FFFFFF");
          } else {
            setBtnShareColor("bg-lightGrayishBlue");
            setFillBtnShareColor("#6E8098");
          }
        }}
      >
        {isClicked && (
          <div className="hidden">
            <ShareComponent />
          </div>
        )}

        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
          <path
            fill={`${btnfillShareColor}`}
            d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
          />
        </svg>
      </div>

      <div
        className={`p-2 ${btnShareColor} rounded-full  cursor-pointer hidden md:flex`}
        onClick={() => {
          setiSClicked(!isClicked);
          if (btnShareColor === "bg-lightGrayishBlue") {
            setBtnShareColor("bg-desaturatedDarkBlue");
            setFillBtnShareColor("#FFFFFF");
          } else {
            setBtnShareColor("bg-lightGrayishBlue");
            setFillBtnShareColor("#6E8098");
          }
        }}
      >
        {isClicked && (
          <div className="absolute -top-[70px] -right-[106px] transition-all">
            <ShareComponent />
          </div>
        )}

        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
          <path
            fill={`${btnfillShareColor}`}
            d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
          />
        </svg>
      </div>
    </div>
  );
}

export default BtnShareOnDesktop