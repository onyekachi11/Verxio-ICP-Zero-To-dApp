import JobCard from "@/components/jobComponent/JobCard";
import React from "react";

const page = () => {
  const item = [{ name: "one" }, ];
  return (
    <div className="border p-[32px] rounded-2xl ">
      <h2 className="text-primary text-[28px] font-semibold mb-[32px] capitalize">
        Welcome back John
      </h2>
      {item.map((item) => (
        <JobCard key={item.name} />
      ))}
      
    </div>
  );
};

export default page;
