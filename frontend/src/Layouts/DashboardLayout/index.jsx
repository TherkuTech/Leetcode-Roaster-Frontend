import DashboardHeader from "../../Components/DashboardHeader"
import DashboardFooter from "../../Components/DashboardFooter"
import React from "react"


const DashboardLayout = ({children}) => {
    console.log(children)
    return (
        <>
            <h1>Helloworld</h1>
            <DashboardHeader/>
            {children}
            <DashboardFooter/>
        </>
    );
};


export default DashboardLayout;