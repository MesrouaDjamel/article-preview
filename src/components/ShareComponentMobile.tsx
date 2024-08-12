import Image from "next/image";
import SocialNetwork from "./SocialNetwork";

const ShareComponentMobile = ({setIsClicked,isClicked}:{
    setIsClicked:React.Dispatch<React.SetStateAction<boolean>>,
    isClicked:boolean
}) => {
  return (
    <div className="absolute bottom-0 left-0 bg-veryDarkGrayishBlue flex items-center justify-between gap-2 w-[327px] rounded-lg px-6 py-4 md:hidden">
      <h1 className="uppercase text-grayishBlue widest text-[13px] ">Share</h1>
     <SocialNetwork/>
      <div className="cursor-pointer p-2 bg-desaturatedDarkBlue rounded-full"
      onClick={()=>{
        setIsClicked(!isClicked)
      }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"> 
          <path
            fill="#ffffff"
            d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
          />
        </svg>
      </div>
    </div>
  );
}

export default ShareComponentMobile