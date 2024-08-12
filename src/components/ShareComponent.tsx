import Image from "next/image"
import Triangle from "./Triangle";
import SocialNetwork from "./SocialNetwork";

const ShareComponent = () => {
  return (
    <div className="relative bg-veryDarkGrayishBlue flex items-center justify-between gap-2 w-[250px] rounded-lg px-6 py-4 md:w-max ">
      <h1 className="uppercase text-grayishBlue widest text-[13px] ">Share</h1>
      <SocialNetwork />
      <Triangle />
    </div>
  );
}

export default ShareComponent


