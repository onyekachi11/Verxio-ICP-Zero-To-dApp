import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <div
        className={`text-center w-full  font-semibold text-[32px] bg-[rgba(0,0,0,0.1)] p-10 settings-bg-img h-[300px]`}
      >
      </div>
      {children}
    </div>
  );
};

export default layout;
