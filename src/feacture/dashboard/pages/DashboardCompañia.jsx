import React, { useState } from "react";
import { Title } from "../../landing/components/Title";
import { DashboardCompaniesForm } from "../components/compañias/DashboardCompaniesForm";
import { DashboardCompaniesTable } from "../components/compañias/DashboardCompaniesTable";

export const DashboardCompania = () => {
    const [companies, setCompanies] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState(null);

    return (
        <section className="w-full p-[20px]">
            <Title title="dashboard/Compañia" />

            <section className="flex gap-[20px]">
                <div className="w-[25%]">
                    <DashboardCompaniesForm
                        selectedCompany={selectedCompany}
                        setSelectedCompany={setSelectedCompany}
                        setCompanies={setCompanies} // Pasamos la función setCompanies
                    />
                </div>
                <DashboardCompaniesTable
                    companies={companies}
                    setSelectedCompany={setSelectedCompany}
                />
            </section>
        </section>
    );
};
