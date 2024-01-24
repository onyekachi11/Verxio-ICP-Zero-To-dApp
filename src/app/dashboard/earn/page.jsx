"use client";

import JobCard from "../../../components/jobComponent/JobCard";
import { useContext, useEffect, useState,  React } from "react";
import { listDocs } from "@junobuild/core";

// import { AuthContext } from "../../../components/auth";

const page = () => {
  // const { user } = useContext(AuthContext);
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   window.addEventListener("reload", list);

  //   return () => {
  //     window.removeEventListener("reload", list);
  //   };
  // }, []);

  // const tasklist = async () => {
  //   const { items } = await listDocs({
  //     collection: "notes",
  //   });

  //   setItems(items);
  // };

  // useEffect(() => {
  //   if ([undefined, null].includes(user)) {
  //     setItems([]);
  //     return;
  //   }

  //   (async () => await tasklist())();
  // }, [user]);

  const item = [
    { name: "one" },
    { name: "one" },
    { name: "one" },
    { name: "one" },
  ];
  return (
    <>
       <div className="border p-[32px] rounded-2xl">
        <h2 className="text-primary text-[28px] font-semibold mb-[32px] capitalize">
          Welcome back John
        </h2>
        {item.map((item) => (
          <JobCard key={item.name} />
        ))}
      </div>
    </>
  );
};

export default page;
