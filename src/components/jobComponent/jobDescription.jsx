"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "../Button";
import Ethereum from "../../assets/ethereum.svg";
import ICP from "../../assets/icp-logo.svg";
import Solana from "../../assets/solana-logo.svg";
import PaperClip from "../../assets/paperclip.svg";
import HardDrive from "../../assets/hard-drive.svg";
import LinkIcon from "../../assets/link.svg";
import DescListCard from "./descListCard";
import { UseSelector, useSelector } from "react-redux";
import LikeButtons from "../likeButtons";
import CommentButton from "../commentButton";
import { setDoc } from "@junobuild/core-peer";

const JobDescription = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userProposal, setUserProposal] = useState("");

  const data = useSelector(
    (state) => state.persistedReducer.jobValues.jobDetails
  );

  // const { jobDetails } = useNav();

  // const { data } = jobDetails;

  const userProfile = useSelector(
    (state) => state.persistedReducer.user.userProfile
  );
    // console.log(userProfile)

    const toggleModal = async () => {
      setIsModalOpen(!isModalOpen);
      try {
        if (userProposal.trim() !== "") {
          const submissionData = {
            ...data,
            applicantProposal: userProposal,
            applicantFirstName: userProfile.firstName,
            applicantLastName: userProfile.lastName,
            applicantBio: userProfile.bio,
            applicantPortfolio: userProfile.website,
            applicantResume: userProfile.fileDoc,
            applicantId: userProfile.owner
          };
          console.log("Submission Data", submissionData);
          console.log("Submitting task proposal...")
          
          await setDoc({
            collection: "taskProposals",
            doc: {
              key: data.taskId,
              data: submissionData
            }
          });

          console.log("Submission successful");
        }
      } catch (error) {
        console.error("Task submission error:", error);
      }

    };

  const handleProposalChange = (event) => {
    setUserProposal(event.target.value);
  };

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
  };

  return (
    <>
      <div>
        <div className="border border-[#B6B8EC bd-[#FFFFFF] px-[22px] py-[16px] rounded-2xl shadow mb-[34px]">
          <div className="flex justify-between ">
            <div className=" flex gap-4">
              <div>
                <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-8 aspect-square object-cover rounded-full border" />
              </div>
              <div className="flex flex-col">
                <p className="text-[#020202] text-[18px] font-semibold capitalize">
                  {/* Trail Bitz Company */}
                  {data?.title}
                </p>
                <p className="font-normal text-[14px] text-[#424242]">
                  Frontend engineer/ Full-time (remote)/ Lagos.
                </p>
              </div>
            </div>
            <div className="flex border rounded-lg px-4 py-2 border-[#B6B8EC] items-center">
              <p className="text-[14px] font-medium">{data.amount}</p>
              <span className="text-[8px] mr-1">$300</span>
              <Image
                alt="Ethereum"
                src={logo(data.paymentMethod)}
                className="w-[20px]"
              />
            </div>
          </div>
          <div className=" flex gap-[24px] mt-[22px] items-center">
            <LikeButtons />
            <CommentButton />
          </div>
        </div>
        <div className="border border-[#B6B8EC bg-[#FFFFFF] shadow rounded-2xl p-[30px]">
          <DescListCard label="Job Description" value={data.description} />
          <DescListCard
            label="responsibilities"
            value={data.responsibilities}
          />
          <DescListCard
            label="requirements"
            value={data.requirements}
          />
            <DescListCard
            label="reward pool"
            value={data.rewardStructure}
          />
        </div>
        <div className="flex gap-5 mt-[56px] justify-end">
          <Button outline name="Submissions" href="/dashboard/submissions" />
          <Button name="Apply" onClick={toggleModal} />
        </div>
      </div>

      {isModalOpen && (
        <div className="border border-black absolute top-0 left-0 bottom-0 w-full h-screen bg-[rgba(0,0,0,0.1)] z-50 flex justify-center items-center ">
          <div className="bg-white p-[48px]">
            <div className="border p-5 flex rounded-xl  flex-col">
              <div className="flex gap-3 items-center">
                <div>
                  <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-8 aspect-square object-cover rounded-full border" />
                </div>
                <input
                  className="outline-none bg-[#F2F4F3] rounded-[8px] p-3 text-[14px] "
                  placeholder="Write Something..."
                  value={userProposal}
                  onChange={handleProposalChange}
                />
              </div>
              <div className="flex justify-end gap-5 py-3">
                <Image alt="Hard-drive" src={HardDrive} />
                <Image alt="copy" src={PaperClip} />
                <Image alt="Link Icon" src={LinkIcon} />
              </div>
            </div>
            <div className="flex justify-end  mt-10">
              <Button name="Submit Now" onClick={toggleModal} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default JobDescription;
