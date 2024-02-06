"use client";

import JobCard from "../../../components/jobComponent/JobCard";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { listDocs } from "@junobuild/core";
import { authSubscribe } from "@junobuild/core";

import { AuthContext } from "../../../components/auth";
import { useNav } from "../../../context/nav_context";
import { root } from "../../../../store";

const Page = () => {
  const [jobs, setJobs] = useState([]);

  const user = useSelector((state)=> state.persistedReducer.user.userValue)
  const userProfile = useSelector((state)=> state.persistedReducer.user.userProfile)


  const list = async () => {
    try {
      const { items } = await listDocs({
        collection: "publish-task",
      });
      setJobs(items);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  // console.log(userProfile)

  useEffect(() => {
    if (user) {
      list()
    }
  }, [user]);

  return (
    <>
      <div className="border p-[32px] rounded-2xl">
        <h2 className="text-primary text-[28px] font-semibold mb-[32px] capitalize">
          Welcome back {userProfile.firstName}
          {/* hello */}
        </h2>
        {jobs?.map((item) => (
          <JobCard key={item.key} jobs={item} />
        ))}
      </div>
    </>
  );
};

export default Page;
