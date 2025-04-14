import React from "react";
import { DashboardLayout } from "../layout/DashboardLayout";
import { Outlet } from "react-router-dom";

export const Dashboard = () => {
    return(
        <DashboardLayout>
            <Outlet />

        </DashboardLayout>
    )
}