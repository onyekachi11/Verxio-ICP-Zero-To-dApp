import Image from 'next/image'
import React from 'react'
import Comment from "../assets/comment.svg";

const CommentButton = () => {
  return (
    <div className="border rounded-lg px-4 py-[9px] border-[#B6B8EC] flex gap-2 items-center bg-[#F7F7FD]">
      <Image alt="comment on it" src={Comment} className="cursor-pointer" />
      <p className="text-[12px] mt-1">0</p>
    </div>
  );
}

export default CommentButton