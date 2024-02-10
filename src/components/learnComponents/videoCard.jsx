import Image from "next/image";
import React from "react";
import ManVR from "../../assets/manVR.png";
import LikeButtons from "../likeButtons";
import CommentButton from "../commentButton";
import Button from "../Button";

const VideoCard = () => {
  return (
    <div className="flex gap-8 border rounded-2xl px-8 py-6 mb-5">
      {/* <Image alt="person with VR" src={ManVR} /> */}
      <iframe
        width="500"
        height="180"
        src={`https://www.youtube.com/embed/mr_9XArcG9Y?si=WR-xff-GIy5xLJd8`}
        title="YouTube video player"
        // frameborder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope;"
        // allowfullscreen
      ></iframe>

      <div className="flex flex-col w-[80%] ">
        <p className="font-semibold text-[24px] text-[#303036] mb-3">
        Building Dapps at Lightning Speed: Juno and the Internet Computer
        </p>
        <p className="text-[16px]  text-[#484851]">
        Learn how to launch your first smart contract on the Internet Computer
        write a single line of backend code. 
        </p>
        <p className="text-[#60606C] text-[12px]">
        David Dal Busco, Software Engineer at DFINITY
        </p>
        <div className="flex justify-between mt-5">
          <div className=" flex gap-[24px] items-center">
            <LikeButtons />
            <CommentButton />
          </div>
          <Button name="view lesson" outline href='/dashboard/learn/video-lesson' />
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
