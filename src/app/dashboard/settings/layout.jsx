import React from "react";
import img from '../../../assets/settings-hero.png'
// import { url } from "inspector";

const layout = ({ children }) => {
  return (
    <div>
      <div
        className={`text-center w-full  font-semibold text-[32px] bg-[rgba(0,0,0,0.1)] p-10 settings-bg-img h-[300px]`}
      >
        {/* What{" "}
        <span className="text-[#00ADEF] border-b-[2px] border-[#00ADEF] italic">
          work call
        </span>{" "}
        do you have in mind today? */}
      </div>
      {children}
    </div>
  );
};

export default layout;
