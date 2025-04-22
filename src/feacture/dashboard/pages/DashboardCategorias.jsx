// VISTA PRINCIPAL DE CATEGORÍAS DEL DASHBOARD
import React, { useState } from "react";
import { Title } from "../../landing/components/Title";
import { DashboardCategoriaForm } from "../components/categorias/DashboardCategoriasForm";
import { DashboardCategoriaTable } from "../components/categorias/DashboardCategoriasTable";

export const DashboardCategorias = () => {
    // Estado para saber qué categoría se está editando (null si es nueva)
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Bandera que nos sirve para recargar la tabla cuando algo cambia
    const [reloadFlag, setReloadFlag] = useState(false);

    return (
        <section className="w-full p-[20px]">
            <Title title="dashboard/Categorias" />
            <section className="flex gap-[20px]">
                {/* FORMULARIO (registrar / editar categoría) */}
                <section className="w-[25%]">
                    <DashboardCategoriaForm
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                        reload={() => setReloadFlag(!reloadFlag)} // Esto fuerza la recarga de la tabla
                    />
                </section>

                {/* TABLA DE CATEGORÍAS */}
                <DashboardCategoriaTable
                    onEdit={setSelectedCategory}
                    reloadFlag={reloadFlag}
                    setReloadFlag={setReloadFlag}
                />
            </section>
        </section>
    );
};
