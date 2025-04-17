import React from "react";
import { Title } from "../../landing/components/Title";
import { DashboardCompaniesForm } from "../components/compañias/DashboardCompaniesForm";
import { DashboardCompaniesTable } from "../components/compañias/DashboardCompaniesTable";

export const DashboardCompania = () => {
    return(
        <section className="w-full p-[20px]">
            <Title title="dashboard/Compañia" />

            <section className="flex gap-[20px]">
                <div className="w-[25%]">
                    <DashboardCompaniesForm />

                </div>
                <DashboardCompaniesTable />
            </section>
        </section>
    )
}