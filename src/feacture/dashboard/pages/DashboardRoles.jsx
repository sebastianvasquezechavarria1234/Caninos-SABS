import React from "react";
import { Title } from "../../landing/components/Title";
import { DashboardRolesForm } from "../components/roles/DashboardRolesForm";
import { DashboardRolesTable } from "../components/roles/DashboardRolesTable";

export const DashboardRoles = () => {
    return(
        <section className="w-full p-[20px]">
            <Title title="dashboard/Roles" />

            <section className="flex gap-[20px]">
                <section className="w-[25%]">
                    <DashboardRolesForm />
                </section>
                    <DashboardRolesTable />
            </section>
        </section>
    )
}