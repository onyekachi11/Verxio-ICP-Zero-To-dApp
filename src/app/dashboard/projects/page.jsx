"use client";
import React, { useState, useEffect } from "react";
import Button from "../../../components/Button";
import ProjectCard from "../../../components/projectCard";
import { listDocs } from "@junobuild/core-peer";
import { useSelector } from "react-redux";

const Page = () => {
  const [projects, setProjects] = useState([]);

  const user = useSelector((state) => state.persistedReducer.user.userValue);
  useEffect(() => {
    const list = async () => {
      try {
        const { items } = await listDocs({
          collection: "projects",
        });
        setProjects(items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (user) {
      list();
    }
  }, [user]);

  console.log(projects);

  return (
    <div className="border p-[32px] rounded-2xl">
      <h2 className="text-primary text-[28px] font-semibold capitalize mb-9">
        Project Contract
      </h2>

      {projects.filter((item)=> item.owner == user.key)
      .map((item) => (
        <div key={item.owner} className="mb-[32px]">
          {item.data.map((items) => (
            <ProjectCard key={items.owner} item={items} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Page;
