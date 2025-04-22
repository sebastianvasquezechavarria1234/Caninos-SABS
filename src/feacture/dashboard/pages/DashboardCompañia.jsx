import React, { useState, useEffect } from "react";
import axios from "axios";
import { Title } from "../../landing/components/Title";
import { DashboardCompaniesForm } from "../components/compañias/DashboardCompaniesForm";
import { DashboardCompaniesTable } from "../components/compañias/DashboardCompaniesTable";

export const DashboardCompania = () => {
    const [companies, setCompanies] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState(null);

    // Función para obtener las compañías del servidor
    const fetchCompanies = async () => {
        try {
            const res = await axios.get("http://localhost:3030/companies");
            setCompanies(res.data);
        } catch (error) {
            console.error("Error al cargar compañías:", error);
        }
    };

    // Cargar compañías al montar el componente
    useEffect(() => {
        fetchCompanies();
    }, []);

    return (
        <section className="w-full p-[20px]">
            <Title title="dashboard/Compañia" />

            <section className="flex gap-[20px]">
                <div className="w-[25%]">
                    <DashboardCompaniesForm
                        selectedCompany={selectedCompany}
                        setSelectedCompany={setSelectedCompany}
                        fetchCompanies={fetchCompanies} // Pasamos la función fetchCompanies en lugar de setCompanies
                    />
                </div>
                <DashboardCompaniesTable
                    companies={companies}
                    setSelectedCompany={setSelectedCompany}
                    fetchCompanies={fetchCompanies} // Pasamos la función fetchCompanies
                />
            </section>
        </section>
    );
};