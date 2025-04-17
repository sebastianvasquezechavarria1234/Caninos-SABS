import React from "react";
import { Title } from "../../landing/components/Title";
import { DashboardCategoriaForm } from "../components/categorias/DashboardCategoriasForm";
import { DashboardCategoriaTable } from "../components/categorias/DashboardCategoriasTable";

export const DashboardCategorias = () => {
    return(
        <section className="w-full p-[20px]">
            <Title title="dashboard/Categorias" />

            <section className="flex gap-[20px]">
                <section className="w-[25%]">
                    <DashboardCategoriaForm />
                </section>
                    <DashboardCategoriaTable />
            </section>
        </section>
    )
}