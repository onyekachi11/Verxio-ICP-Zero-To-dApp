"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import Ethereum from "../../assets/ethereum.svg";
import ICP from "../../assets/icp-logo.svg";
import Solana from "../../assets/solana-logo.svg";
import USDC from "../../assets/usdc-logo.svg";
import USDT from "../../assets/usdt-logo.svg"
import PaperClip from "../../assets/paperclip.svg";
import HardDrive from "../../assets/hard-drive.svg";
import LinkIcon from "../../assets/link.svg";
import DescListCard from "./descListCard";
import { useSelector } from "react-redux";
import LikeButtons from "../likeButtons";
import CommentButton from "../commentButton";
import { setDoc } from "@junobuild/core-peer";
import { CloseCircle } from "iconsax-react";
import { toast } from "react-toastify";

const JobDescription = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userProposal, setUserProposal] = useState("");
  const [loading, setLoading] = useState(false);
  const [upVoteValue, setUpVoteValue] = useState(0)
  const [downVoteValue, setDownVoteValue] = useState(0)

  const data = useSelector(
    (state) => state.persistedReducer.jobValues.jobDetails
  );

  console.log(data);

  const userProfile = useSelector(
    (state) => state.persistedReducer.user.userProfile
  );
  // console.log(data)
  // console.log(userProfile)

  const toggleModal = async () => {
    // setIsModalOpen(!isModalOpen);
    setLoading(true);
    try {
      if (userProposal.trim() !== "") {
        const submissionData = {
          ...data,
          applicantProposal: userProposal,
          applicantFirstName: userProfile?.firstName,
          applicantLastName: userProfile?.lastName,
          applicantBio: userProfile?.bio,
          applicantPortfolio: userProfile?.website,
          applicantResume: userProfile?.powUrl,
          applicantId: userProfile?._id,
        };
        console.log("Submission Data", submissionData);
        console.log("Submitting task proposal...");

        await setDoc({
          collection: "proposals",
          doc: {
            key: data.taskId,
            data: submissionData,
          },
        });

        console.log("Submission successful");
        toast.success("Submission successful");
        setLoading(false);
      }
    } catch (error) {
      console.error("Task submission error:", error);
      toast.error("Submission Failed");
      setLoading(false);
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
    } else if (coin === "USDT") {
      return USDT;
    } else if (coin === "USDC") {
      return USDC;
    }
  };

  useEffect(() => {
    getVotes(data.taskId);
  }, [data.taskId]);

  const upVote = async (id) => {
    try {
      const response = await fetch(
        `https://verxio-backend.vercel.app/api/v1/posts/upvotes/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(
          `Failed to upvote post: ${response.status} ${response.statusText}`
        );
      }

      getVotes(data.taskId)
      console.log("Post upvoted successfully!");
      // const data = await response.json();

    } catch (error) {
      console.error("Error upvoting post:", error.message);
      // Display error message to the user or handle it in another appropriate way
    }
  };
  const downVote = async (id) => {
    try {
      const response = await fetch(
        `https://verxio-backend.vercel.app/api/v1/posts/downvotes/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(
          `Failed to upvote post: ${response.status} ${response.statusText}`
        );
      }

      console.log("Post upvoted successfully!");
      getVotes(data.taskId);

      // Optionally update UI here
    } catch (error) {
      console.error("Error upvoting post:", error.message);
      // Display error message to the user or handle it in another appropriate way
    }
  };

  const getVotes = async (id) => {
    try {
      const response = await fetch(
        `https://verxio-backend.vercel.app/api/v1/posts/${id}`
      );

      if (!response.ok) {
        throw new Error(
          `Failed to upvote post: ${response.status} ${response.statusText}`
        );
      }

      console.log("Post upvoted successfully!");
      const data = await response.json();

      setUpVoteValue(data?.contract?.upvotes)
      setDownVoteValue(data?.contract?.downvotes)
      console.log(data)
    } catch (error) {
      console.error("Error upvoting post:", error.message);
      // Display error message to the user or handle it in another appropriate way
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
                  {data.ownerBio}
                </p>
              </div>
            </div>
            <div className="flex border rounded-lg px-4 py-2 border-[#B6B8EC] items-center gap-2">
              <p className="text-[14px] font-medium mt-1">{data.amount}</p>
              {/* <span className="text-[8px] mr-1">$300</span> */}
              <Image
                alt="Ethereum"
                src={logo(data.paymentMethod)}
                className="w-[20px]"
              />
            </div>
          </div>
          <div className=" flex gap-[24px] mt-[22px] items-center">
            <LikeButtons upVote={upVote} id={data.taskId} upVoteValue={upVoteValue} downVote={downVote} downVoteValue={downVoteValue} />
            <CommentButton />
          </div>
        </div>
        <div className="border border-[#B6B8EC bg-[#FFFFFF] shadow rounded-2xl p-[30px]">
          <DescListCard label="Job Description" value={data.description} />
          <DescListCard
            label="responsibilities"
            value={data.responsibilities}
          />
          <DescListCard label="requirements" value={data.requirements} />
          <DescListCard label="reward pool" value={data.rewardStructure} />
        </div>
        <div className="flex gap-5 mt-[56px] justify-end">
          <Button outline name="Submissions" href="/dashboard/submissions" />
          <Button name="Apply" onClick={() => setIsModalOpen(true)} />
        </div>
      </div>

      {isModalOpen && (
        <div className="absolute top-0 left-0 bottom-0 w-full h-screen bg-[rgba(0,0,0,0.1)] z-50 flex justify-center items-center ">
          <div className="bg-white p-[48px]">
            <div
              className="flex justify-end mb-4 cursor-pointer"
              onClick={() => setIsModalOpen(false)}
            >
              <CloseCircle />
            </div>
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
              <Button
                name="Submit Now"
                isLoading={loading}
                onClick={toggleModal}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default JobDescription;
