"use client";
import React, { useState, useEffect } from "react";
import Button from "../../../components/Button";
import SubmissionCard from "../../../components/submissionCard";
import { useSelector } from "react-redux";
import { listDocs, setDoc } from "@junobuild/core-peer";

const Page = () => {
  const [assignees, setAssignees] = useState([]);
  const [isCheckeds, setIscheckeds] = useState(false);
  const [submissions, setSubmissions] = useState([]);
  const [activeTab, setActiveTab] = useState(1);

  const user = useSelector((state) => state.persistedReducer.user.userValue);

  useEffect(() => {
    const list = async () => {
      try {
        const { items } = await listDocs({
          collection: "proposals",
        });

        const allSubmission = items.map((item) => {
          return {
            ...item.data,
            dateSubmitted: item.created_at,
          };
        });
        setSubmissions(allSubmission);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (user) {
      list();
    }
  }, [user]);

  console.log("Task Submissions", submissions);

  const selectUser = (item) => {
    setIscheckeds(!isCheckeds);

    const existingitem = assignees.findIndex(
      (existingItem) => existingItem.id === item.id
    );

    if (existingitem !== -1) {
      assignees.splice(existingitem, 1);
    } else {
      setAssignees([...assignees, item]);
    }
  };

  console.log("assignees", assignees);

  const handleAssignButtonClick = async () => {
    try {
      if (assignees.length > 0) {
        // console.log("Assigned items:", assignees);
        const documentKey = "your_document_key";

        console.log("Assigning task...");
        await setDoc({
          collection: "projects",
          doc: {
            key: documentKey,
            data: assignees
          }
        });
        console.log("Project assignment done.");
      } else {
        console.log("No items assigned. Please select at least one item before clicking Assign.");
      }
    } catch (error) {
      console.error("Error assigning items:", error);
    }
  };

  return (
    <div className="border rounded-lg px-[41px] py-[37px] h-full">
      <div className="flex justify-between mb-9 ">
        <h2 className="text-primary text-[28px] font-semibold capitalize">
          Submissions
        </h2>
        {activeTab === 1 && (
          <Button outline name="assign" onClick={handleAssignButtonClick} />
        )}
      </div>
      <div className="flex gap-5 mb-7">
        <Button
          name="job posted"
          outline={activeTab !== 1}
          onClick={() => setActiveTab(1)}
          className={
            activeTab === 1
              ? "text-[#00ADEF] bg-[#00ADEF]/10 rounded-[0px] "
              : "text-[#60606C] bg-transparent rounded-[0px]"
          }
        />
        <Button
          name="job applied"
          outline={activeTab !== 2}
          onClick={() => setActiveTab(2)}
          className={
            activeTab === 2
              ? "text-[#00ADEF] bg-[#00ADEF]/10 rounded-[0px] "
              : "text-[#60606C] bg-transparent rounded-[0px]"
          }
        />
      </div>

      {activeTab === 1 &&
        submissions
          .filter((items) => items.owner == user.owner)
          .map((item) => (
            <SubmissionCard
              key={item.applicantId}
              item={item}
              selectUser={selectUser}
              isChecked={isCheckeds}
            />
          ))}
      {activeTab === 2 &&
        // <div>
        //   <p>Apply to a Task</p>
        // </div>
        submissions
          .filter((items) => items.applicantId == user.owner)
          .map((item) => (
            <SubmissionCard
              key={item.applicantId}
              item={item}
              selectUser={selectUser}
              isChecked={isCheckeds}
            />
          ))}
    </div>
  );
};

export default Page;
