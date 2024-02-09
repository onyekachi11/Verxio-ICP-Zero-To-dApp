"use client";

import JobCard from "../../../components/jobComponent/JobCard";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { listDocs } from "@junobuild/core-peer";

const Page = () => {
  const [jobs, setJobs] = useState([]);
  const user = useSelector((state) => state.persistedReducer.user.userValue);
  const userProfile = useSelector(
    (state) => state.persistedReducer.user.userProfile
  );

  useEffect(() => {
    const list = async () => {
      try {
        const { items } = await listDocs({
          collection: "publish-task",
        });
        setJobs(items);
        console.log(items)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (user) {
      list();
    }
  }, [user]);

  // console.log(user);
  // console.log(userProfile);

  return (
    <div className="border p-[32px] rounded-2xl">
      <h2 className="text-primary text-[28px] font-semibold mb-[32px] capitalize">
        Welcome back {userProfile?.firstName}
        {/* Welcome back */}
      </h2>
      {jobs?.map((item) => (
        <JobCard key={item.key} jobs={item} />
      ))}
    </div>
  );
};

export default Page;
