/* eslint-disable react/prop-types */
import DashboardHeader from "../../Components/DashboardHeader";
import DashboardFooter from "../../Components/DashboardFooter";


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
