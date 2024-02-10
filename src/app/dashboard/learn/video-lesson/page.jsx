import React from "react";
import LikeButtons from "../../../../components/likeButtons";
import CommentButton from "../../../../components/commentButton";
import Button from "../../../../components/Button";

const Page = () => {
  return (
    <div className="p-8">
      <div className="border rounded-2xl shadow-lg p-8">
        <iframe
          // width="500"
          height="480"
          className="w-full rounded-xl"
          src={`https://www.youtube.com/embed/mr_9XArcG9Y?si=WR-xff-GIy5xLJd8`}
          title="YouTube video player"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope;"
          allowFullScreen
        ></iframe>
        <p className="font-semibold text-[24px] text-[#303036] mt-8">
          Building Dapps at Lightning Speed: Juno and the Internet Computer:{" "}
          <br />
          <span className="text-[18px] font-light text-[#484851] ml-3 leading-[5px]">
            In this workshop, you will learn how easily you can implement
            authentication in your app, save data and images on the chain, and
            ultimately launch your first smart contract on the Internet
            Computer. And the best part? You won&apos;t need to write a single
            line of backend code.
          </span>
        </p>
        <div className="flex items-center justify-between mt-5">
          <div className="flex gap-3 items-center">
            <div className="rounded-full w-[44px] h-[44px] flex justify-center items-center shadow-md bg-white">
              <p className="text-[#00ADEF] text-[18px] font-semibold">V</p>
            </div>
            <div>
              <p className="font-semibold text-[16px] text-[#60606C]">
                David Dal Busco{" "}
              </p>
              <p className="text-[12px] text-[#60606C]">
                Software Engineer at DFINITY
              </p>
            </div>
          </div>
          {/* <div> */}
          <div className=" flex gap-[24px] items-center">
            <LikeButtons />
            <CommentButton />
          </div>
          {/* </div> */}
        </div>
      </div>
      <div className="flex justify-between mt-10 ">
        <div className="rounded-lg p-4  w-[80%] bg-[#DFDFF7] flex flex-col gap-8 ">
          <p className="px-4 py-2 bg-[#EFEFFB] rounded-lg w-[91px] text-center font-semibold">
            Quiz
          </p>
          <ol>
            <li>
              What is the primary function of Uniswap in the DeFi ecosystem? a)
              Decentralized identity verification b) Decentralized exchange c)
              Decentralized storage d) Decentralized lending
            </li>
            <li>
              Which of the following best describes the role of Compound in the
              DeFi space? a) Decentralized exchange protocol b) Decentralized
              lending protocol c) Decentralized prediction market d)
              Decentralized governance platform
            </li>
          </ol>

          <div className="flex justify-end">
            <Button name="submit" />
          </div>
        </div>
        {/* <p className="bg-[#E4E4E7] px-4 py-2 rounded-lg h-[44px] flex items-center font-semibold text-[#757575] ">
          Claim Prize
        </p> */}
        <Button
          name="claim prize"
          className="h-[44px] bg-[#E4E4E7] font-semibold text-[#757575] "
        />
      </div>
    </div>
  );
};

export default Page;
