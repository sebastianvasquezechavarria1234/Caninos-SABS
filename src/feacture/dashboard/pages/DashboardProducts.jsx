import React from "react";
import { Title } from "../../landing/components/Title";
import { DashboardProductsForm } from "../components/products/DashboardProductsForm";
import { DashboardProductsTable } from "../components/products/DashboardProductsTable";

export const DashboardProducts = () => {
    return(
        <section className="w-w-full p-[20px]">
            <Title title="dashboard/Productos" />

            <div className="flex gap-[20px]">
                <DashboardProductsForm />
                <DashboardProductsTable />
            </div>
        </section>
    )
}