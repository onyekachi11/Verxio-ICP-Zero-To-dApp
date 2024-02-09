import Link from "next/link";
import React from "react";

const SubmissionCard = ({ item, selectUser, ischecked }) => {
  // const { firstName, bio, date, description } = item;
  const {
    applicantFirstName,
    applicantLastName,
    applicantBio,
    applicantResume,
    applicantPortfolio,
    applicantProposal,
    dateSubmitted,
  } = item;

  const milliseconds = Number(dateSubmitted) / 1000000; // Convert nanoseconds to milliseconds
  const date = new Date(milliseconds).toLocaleString("default", { month: "short" , day:"2-digit"});

  return (
    <div className="flex align-top gap-4 border rounded-2xl p-7 bg-[#F7F7FD] mb-6">
      <div>
        <div className="border w-[89px] h-[89px] bg-gray-600 rounded-full"></div>
      </div>
      <div className="w-full">
        <div className="flex justify-between">
          <div>
            <div className="flex gap-1">
              <p className="text-[20px] font-bold text-[#18181B]">
                {applicantFirstName}
              </p>
              <p className="text-[20px] font-bold text-[#18181B]">
                {applicantLastName}
              </p>
            </div>
            <p className="text-[16px] font-normal text-[#484851]">
              {applicantBio}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <p>{date}</p>
            <input
              type="checkbox"
              className="w-9"
              checked={ischecked}
              onChange={() => selectUser(item)}
            />
          </div>
        </div>
        <p className="text-[#484851] mt-3 mb-5">{applicantProposal}</p>
        <div className="flex gap-8">
          {applicantResume && (
            <Link
              href={applicantResume}
              className="px-4 py-3 shadow-md bg-white rounded-[8px] italic"
            >
              Applicant resume
            </Link>
          )}

          {applicantPortfolio && (
            <Link
              href={applicantPortfolio}
              className="px-4 py-3 shadow-md bg-white rounded-[8px] italic"
            >
              Applicant portfolio
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubmissionCard;
