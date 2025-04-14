import React from "react";
import { DashboardSideBar } from "./DashboardSideBard";
import { Outlet } from "react-router-dom";

export const DashboardLayout = ({children}) => {
    return(
        <main className="w-full h-screen flex">
            <DashboardSideBar />
            {children}
            
        </main>
    )
}