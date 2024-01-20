import React from "react";

const MainDashboardArea = ({
  children,
}) => {
  return (
    <section
      className={`w-full relative flex-1 min-h-full  flex flex-col overflow-scroll`}
    >
      {children}
    </section>
  );
};

export default MainDashboardArea;
