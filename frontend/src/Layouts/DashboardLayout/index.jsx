import DashboardHeader from "../../Components/DashboardHeader";
import DashboardFooter from "../../Components/DashboardFooter";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <DashboardHeader />
      {children}
      <DashboardFooter />
    </>
  );
};

export default DashboardLayout;
