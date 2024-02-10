"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import WomanVR from "../../../assets/womanVR.png";
import Button from "../../../components/Button";
import VideoCard from '../../../components/learnComponents/videoCard'

const Page = () => {
  const userProfile = useSelector(
    (state) => state.persistedReducer.user.userProfile
  );

  const [activeButton, setActiveButton] = useState(0);

  return (
    <div className="border rounded-xl m-6 text-[#424242] px-[40px] py-[32px] ">
      <p className="text-[14px]">
        It’s Learn o’clock,{" "}
        <span className="capitalize">{userProfile?.firstName}!</span>
      </p>
      <h2 className="text-[28px] font-semibold">What’s new on Verxio today?</h2>

      <div className="flex items-center border px-[32px] py-[28px] rounded-2xl bg-primary mt-[32px]">
        <div>
          <p className="font-semibold text-[32px] text-white w-[60%]">
            Cryptocurrencies and Digital Assets
          </p>
          <p className="text-[#FBFBFE] font-normal opacity-85">
            Tokenomics and Utility Tokens, NFTs (Non-Fungible Tokens)
            Demystified
          </p>
        </div>
        <Image
          alt="a person with a VR"
          src={WomanVR}
          className="relative top-7"
        />
      </div>
      <div className="border my-[32px]"></div>
      <div>
        <div className="flex gap-2 mb-3">
          <Button
            name="All Lessons"
            onClick={() => setActiveButton(0)}
            className={
              activeButton === 0
                ? "text-[#00ADEF] bg-[#00ADEF]/10 rounded-[0px] "
                : "text-[#60606C] bg-transparent"
            }
          />
          <Button
            name="recent videos"
            onClick={() => setActiveButton(1)}
            className={
              activeButton === 1
                ? "text-[#00ADEF] bg-[#00ADEF]/10 rounded-[0px] "
                : "text-[#60606C] bg-transparent"
            }
          />
        </div>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
      </div>
    </div>
  );
};

export default Page;
