import React from "react";
import { Title } from "../../landing/components/Title";
import { DashboardUsersTable } from "../components/users/DashboardUsersTable";
import { DashboardUsersForm } from "../components/users/DashboardUsersForm";

export const DashboardUsers = () => {
    return(
        <section className="w-full p-[20px]">
            <Title title="dashboard/Users" />

            {/* FLEX */}
            <section className="flex gap-[20px]">
                {/* INLINE FORM */}
                <div className="w-[25%]">
                    <DashboardUsersForm />
                </div>
                <DashboardUsersTable />
            </section>
        </section>
    )
}