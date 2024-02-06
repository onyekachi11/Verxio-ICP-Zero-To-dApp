import React from "react";
import Ellipse from "../../assets/Ellipse.png";
import Rectangle from "../../assets/Rectangle.png";
import Image from "next/image";

const SecondSection = () => {
  return (
    <div className="flex justify-center items-center mt-[55px] relative">
      <div className="absolute left-[300px] top-[250px]">
        <div className="flex relative">
          <Image alt="rectangle" src={Rectangle} />
          <Image
            alt="rectangle"
            src={Rectangle}
            className="absolute left-6 top-2"
          />
        </div>
      </div>
      <div className="w-[818px] gap-3 flex flex-col items-center">
        <div className="flex items-center gap-3">
          <div className="w-[28px] h-[28px] bg-[#3e8fae] rounded-full flex justify-center items-center">
            <div className="bg-[#00ADEF]  w-[12px] h-[12px] rounded-full "></div>
          </div>
          <p className="border border-[#B6B8EC] rounded-[10px] text-[12px] px-[14px] py-[8px]">
            Encyption that keeps you safe
          </p>
        </div>
        <h1 className="font-bold text-[50px] text-center">
          Connecting Talents to Global Opportunities, Effortlessly!
        </h1>
        <p className="text-center text-[18px] font-normal w-[616px]">
          Post jobs and have talents viy for the position. Keep the payments on
          our escrow system until the job is done and exchange is made.
        </p>
      </div>
      <div className="absolute right-[250px] z-">
        <Image alt="ellipse" src={Ellipse} />
      </div>
    </div>
  );
};

export default SecondSection;
