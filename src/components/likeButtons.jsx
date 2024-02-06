import Image from 'next/image';
import React from 'react'
import Thumbsup from "../assets/thumbs-up.svg";
import Thumbsdown from "../assets/thumbs-down.svg";

const LikeButtons = () => {
  return (
    // <div className=" flex gap-[24px] items-center">
    <div className="flex border rounded-lg px-4 py-2 border-[#B6B8EC] items-center bg-[#F7F7FD]">
      <div className="flex gap-1 items-center border-r pr-2 mr-2">
        <Image alt="like it" src={Thumbsup} className="cursor-pointer" />
        <p className="text-[12px]">1.2k</p>
      </div>
      <Image alt="dislike it" src={Thumbsdown} className="cursor-pointer" />
    </div>
    // </div>
  );
}

export default LikeButtons