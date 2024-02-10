"use client";
import Image from "next/image";
import React from "react";
import Thumbsup from "../assets/thumbs-up.svg";
import Thumbsdown from "../assets/thumbs-down.svg";

const LikeButtons = ({
  upVote,
  upVoteValue = 0,
  downVote,
  downVoteValue = 0,
  id,
}) => {
  const handleUpvoteClick = async () => {
    try {
      // Perform upvote action
      await upVote(id);
      // Optionally update UI or notify parent component
    } catch (error) {
      console.error("Error upvoting post:", error);
      // Handle error or provide user feedback
    }
  };

  const handleDownVoteClick = async () => {
    try {
      // Perform downvote action
      await downVote(id);
      // Optionally update UI or notify parent component
    } catch (error) {
      console.error("Error downvoting post:", error);
      // Handle error or provide user feedback
    }
  };

  return (
    <div className="flex border rounded-lg px-4 py-2 border-[#B6B8EC] items-center bg-[#F7F7FD]">
      <div className="flex gap-2 items-center border-r pr-2 mr-2">
        <Image
          alt="like it"
          src={Thumbsup}
          className="cursor-pointer"
          onClick={() => handleUpvoteClick()}
        />
        <p className="text-[12px] mt-2">{upVoteValue}</p>
      </div>
      <div className="flex gap-2 items-center">
        <p className="text-[12px] mt-2">{downVoteValue}</p>
        <Image
          alt="dislike it"
          src={Thumbsdown}
          className="cursor-pointer mt-1"
          onClick={() => handleDownVoteClick()}
        />
      </div>
    </div>
  );
};

export default LikeButtons;
