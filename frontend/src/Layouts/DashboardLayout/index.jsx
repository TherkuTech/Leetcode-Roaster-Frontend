<<<<<<< HEAD
/* eslint-disable react/prop-types */
import DashboardHeader from "../../Components/DashboardHeader"
import DashboardFooter from "../../Components/DashboardFooter"


const DashboardLayout = ({children}) => {
    return (
        <>
            <DashboardHeader/>
            {children}
            <DashboardFooter/>
        </>
    );
=======
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
>>>>>>> eb1575ea13683ef4b6e69ee29f302493af8b6515
};

export default DashboardLayout;
