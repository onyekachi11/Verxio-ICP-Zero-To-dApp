import Image from "next/image";
import React from "react";
import Button from "../Button";
import Thumbsup from "../../assets/thumbs-up.svg";
import Thumbsdown from "../../assets/thumbs-down.svg";
import Comment from "../../assets/comment.svg";
import Ethereum from "../../assets/ethereum.svg";
import Link from "next/link";
import DescListCard from "./descListCard";

const JobDescription = () => {
  const data = {
    description:
      "As a Front-End Engineer at Trail Bitz, you will play a key role in crafting exceptional user experiences for our clients. You will collaborate with cross-functional teams to translate design concepts into responsive and interactive web applications. If you are passionate about creating clean, efficient, and visually appealing interfaces, we want to hear from you.",
    responsibilities: [
      "Collaborate with designers to bring visually appealing and intuitive user interfaces to life.",
      "Write clean, maintainable, and efficient code",
      "Optimise applications for maximum speed and scalability.",
      "Stay up-to-date with the latest industry trends and best practices.",
    ],
    requirements: [
      "Collaborate with designers to bring visually appealing and intuitive user interfaces to life.",
      "Write clean, maintainable, and efficient code",
      "Optimise applications for maximum speed and scalability.",
      "Stay up-to-date with the latest industry trends and best practices.",
    ],
  };
  return (
    <>
      <div className="border border-[#B6B8EC bd-[#FFFFFF] px-[22px] py-[16px] rounded-2xl shadow mb-[34px]">
        <div className="flex justify-between ">
          <div className=" flex gap-4">
            <div>
              <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-8 aspect-square object-cover rounded-full border" />
            </div>
            <div className="flex flex-col">
              <p className="text-[#020202] text-[18px] font-semibold capitalize">
                Trail Bitz Company
              </p>
              <p className="font-normal text-[14px] text-[#424242]">
                Frontend engineer/ Full-time (remote)/ Lagos.
              </p>
            </div>
          </div>
          <div className="flex border rounded-lg px-4 py-2 border-[#B6B8EC] items-center">
            <p className="text-[14px] font-medium">49.7</p>
            <span className="text-[8px] mr-1">$300</span>
            <Image alt="Ethereum" src={Ethereum} />
          </div>
        </div>
        <div className=" flex gap-[24px] mt-[22px] items-center">
          <div className="flex border rounded-lg px-4 py-2 border-[#B6B8EC] items-center bg-[#F7F7FD]">
            <div className="flex gap-1 items-center border-r pr-2 mr-2">
              <Image alt="like it" src={Thumbsup} className="cursor-pointer" />
              <p className="text-[12px]">1.2k</p>
            </div>
            <Image
              alt="dislike it"
              src={Thumbsdown}
              className="cursor-pointer"
            />
          </div>
          <div className="border rounded-lg px-4 py-[9px] border-[#B6B8EC] flex gap-2 bg-[#F7F7FD] items-center">
            <Image
              alt="comment on it"
              src={Comment}
              className="cursor-pointer"
            />
            <p className="text-[12px]">201</p>
          </div>
        </div>
      </div>
      <div className="border border-[#B6B8EC bg-[#FFFFFF] shadow rounded-2xl p-[30px]">
        <DescListCard label="Job Description" value={data.description} />
        <DescListCard
          label="responsibilities"
          type="list"
          value={data.responsibilities}
        />
        <DescListCard
          label="requirements"
          type="list"
          value={data.requirements}
        />
      </div>
      <div className="flex gap-5 mt-[56px] justify-end">
        <Button outline name="Submissions" />
        <Button name="Apply" />
      </div>
    </>
  );
};

export default JobDescription;
