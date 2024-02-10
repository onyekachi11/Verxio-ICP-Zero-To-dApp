// import JobCard from '@/components/jobComponent/JobCard';
import React from 'react'
import JobDescription from '../../../../components/jobComponent/jobDescription';

const page = () => {
  return (
    <div className="border p-[32px] rounded-2xl relativ ">
      <h2 className="text-primary text-[28px] font-semibold mb-[32px] capitalize">
        Task Details
      </h2>
      {/* {item.map((item) => ( */}
        <JobDescription/>
      {/* ))} */}
    </div>
  );
}

export default page