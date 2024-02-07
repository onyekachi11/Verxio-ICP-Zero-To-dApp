// "use client"
import Image from "next/image";
import React from "react";
import Ethereum from "../../assets/ethereum.svg";
import ICP from "../../assets/icp-logo.svg";
import USDC from '../../assets/usdc-logo.svg'
import USDT from '../../assets/usdt-logo.svg'
import Solana from "../../assets/solana-logo.svg";
import Button from "../Button";
import { setJobDetails } from "../../../slices/jobSlice";
import { useSelector, useDispatch } from "react-redux";
import LikeButtons from "../likeButtons";
import CommentButton from "../commentButton";

const JobCard = ({ jobs }) => {

  const dispatch = useDispatch();
  // const { data } = jobs;

  const data = {
    ...jobs.data,
    taskId: jobs.key,
    owner: jobs.owner
  }

  const logo = (coin) => {
    if (coin === "icp") {
      return ICP;
    } else if (coin === "etherum") {
      return Ethereum;
    } else if (coin === "solana") {
      return Solana;
    } else if (coin === 'USDT'){
    return USDT;
  } else if (coin === 'USDC'){
    return USDC;
  }
    // return null
  };

  return (
    <div className="bg-[#FFFFFF] px-[32px] py-[24px] rounded-2xl shadow mb-[34px]">
      <div className=" rounded-2xl bg-[#F7F7FD] p-[18px] cursor-pointer flex justify-between border">
        <div className=" flex gap-4">
          <div>
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-8 aspect-square object-cover rounded-full border" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[#020202] text-[18px] font-semibold capitalize">
              {/* Trail Bitz Company */}
              {data?.title}
            </p>
            <p className="font-normal text-[14px] text-[#424242]">
              {data?.title}/{data.jobType}/ Lagos.
            </p>
            <p className="text-[#484851] font-normal text-[16px] truncate ... max-w-[400px]">
              {/* {responsibilities} */}
              {data?.description}
            </p>
          </div>
        </div>
        <p className="text-[#0B0B28] text-[16px] font-semibold capitalize">
          open
        </p>
      </div>
      <div className="flex justify-between mt-[22px] items-center">
        <div className=" flex gap-[24px] items-center">
          <LikeButtons />
          <CommentButton />
        </div>
        <div className="flex gap-[24px] items-center">
          <div className="flex border rounded-lg px-4 py-2 border-[#B6B8EC] items-center gap-2">
            <p className="text-[14px] font-medium">{data?.amount}</p>
            {/* <span className="text-[8px] mr-1">$300</span> */}
            <Image
              alt="Ethereum"
              src={logo(data.paymentMethod)}
              className="w-[18px]"
            />
          </div>
          <Button
            href="/dashboard/earn/job-description"
            onClick={() => dispatch(setJobDetails(data))}
            outline
            name="Apply"
            className="text-[#00ADEF]"
          />
        </div>
      </div>
    </div>
  );
};

export default JobCard;
