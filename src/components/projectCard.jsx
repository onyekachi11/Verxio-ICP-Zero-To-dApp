import React from "react";
import Button from "./Button";
import chat from "../assets/comment-white.svg"


const ProjectCard = ({ item }) => {

  console.log(item)
  const { applicantFirstName, description, title, applicantLastName} = item;
  return (
    <>
      <div className="border bg-[#F7F7FD] rounded-2xl px-[32px] py-[28px] ">
        <div className="flex justify-between mb-[24px] ">
          <div>
            <p className="text-[20px] font-bold mb-2">
              {title}
            </p>
            <p className="text-[16px] font-medium">
              This agreement is with {applicantFirstName} {applicantLastName}
            </p>
          </div>
          <Button
            name="ongoing"
            className="h-[32px] bg-[#DFF7DF] text-[#23C633] "
          />
        </div>
        <p className="text-[16px] text-[#5F6A61]">{description}</p>
      </div>
      <Button name={`chat ${applicantFirstName}`} icon={chat} className="mt-[32px]" />
    </>
  );
};

export default ProjectCard;
