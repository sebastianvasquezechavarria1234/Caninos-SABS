// views/DashboardCategorias.jsx
import React, { useState } from "react";
import { Title } from "../../landing/components/Title";
import { DashboardCategoriaForm } from "../components/categorias/DashboardCategoriasForm";
import { DashboardCategoriaTable } from "../components/categorias/DashboardCategoriasTable";

export const DashboardCategorias = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [reloadFlag, setReloadFlag] = useState(false);

    return (
        <section className="w-full p-[20px]">
            <Title title="dashboard/Categorias" />
            <section className="flex gap-[20px]">
                <section className="w-[25%]">
                    <DashboardCategoriaForm
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                        reload={() => setReloadFlag(!reloadFlag)}
                    />
                </section>
                <DashboardCategoriaTable
                    onEdit={setSelectedCategory}
                    reloadFlag={reloadFlag}
                    setReloadFlag={setReloadFlag}
                />
            </section>
        </section>
    );
};
