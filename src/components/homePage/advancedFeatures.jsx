import Image from "next/image";
import React from "react";
import Earn from "../../assets/HandCoins.svg";
import Learn from "../../assets/BookOpen.svg";
import Dao from "../../assets/Handshake.svg";

const AdvancedFeatures = () => {
  return (
    <div className="flex justify-center py-[150px] flex-col items-center">
      <div className=" w-[700px] flex flex-col items-center">
        <p className="font-semibold text-[24px]">Advanced Feature</p>
        <h2 className="font-semibold text-[48px] text-center">
          <span className="text-[#00ADEF]">Verxio</span> community powered
          ecosystem focus on 3 sector
        </h2>
        <p className="text-center w-[600px] mt-5">
          Post jobs and have talents viy for the position. Keep the payments on
          our escrow system until the job is done and exchange is made.
        </p>
      </div>
      <div className="flex gap-4 mt-14">
        <div className="w-[394px] p-6 border border-[#B6B8EC] bg-[#79cded]/5 rounded-[20px]">
          <div className="flex gap-3 items-center mb-4">
            <div className="px-2 py-1 rounded-md bg-[#31313b] ">
              <Image alt="icon" src={Earn} />
            </div>
            <p className="uppercase text-[#00ADEF] text-[24px]">Earn</p>
          </div>
          <p className="text-[16px] font-light leading-[19px] mb-3 ">
            A decentralised platform globally tuning into the future of work and
            creating opportunities for talents.
          </p>
        </div>
        <div className="w-[394px] p-6 border border-[#B6B8EC] bg-[#79cded]/5 rounded-[20px]">
          <div className="flex gap-3 items-center mb-4">
            <div className="px-2 py-1 rounded-md bg-[#31313b] ">
              <Image alt="icon" src={Learn} />
            </div>
            <p className="uppercase text-[#00ADEF] text-[24px]">Learn</p>
          </div>
          <p className="text-[16px] font-light leading-[19px] mb-3 ">
            A decentralised platform that allow users to skill up by leveraging
            the resources published on verxio.
          </p>
        </div>
        <div className="w-[394px] p-6 border border-[#B6B8EC] bg-[#79cded]/5 rounded-[20px]">
          <div className="flex gap-3 items-center mb-4">
            <div className="px-2 py-1 rounded-md bg-[#31313b] ">
              <Image alt="icon" src={Dao} />
            </div>
            <p className="uppercase text-[#00ADEF] text-[24px]">DAO</p>
          </div>
          <p className="text-[16px] font-light leading-[20px] mb-6 ">
            A decentralised autonomous organisation with the sole purpose of
            enhancing community engagement and growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvancedFeatures;
// border: 1px solid;

// border-image-source: linear-gradient(269.98deg, #00ADEF 6.8%, rgba(223, 223, 247, 0) 92.25%);
