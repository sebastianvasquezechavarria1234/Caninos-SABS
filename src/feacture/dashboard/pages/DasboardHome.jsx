import React from "react";
import { Title } from "../../landing/components/Title";
import { DashboardCard } from "../components/home/DashboardCard";

export const DashboardHome = () => {
    return(
        <section className="w-full p-[20px]">
            <Title title="dashboard/Home" />

            <section className="grid grid-cols-4 gap-[40px]">
                <DashboardCard
                    to="/dashboard/users"
                    svg="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/65ae6f0fb68c86b45e1f7a21_3.svg"
                    title="Gestión de Usuarios"
                    text="Administra las usuarios registrados en la plataforma. Agrega, edita o elimina registros fácilmente desde este panel."
                 />
                <DashboardCard
                    to="/dashboard/roles"
                    svg="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/65ae6f06ca4e4a4adefa1add_2.svg"
                    title="Gestión de Roles"
                    text="Administra los Roles registradoos en la plataforma. Agrega, edita o elimina registros fácilmente desde este panel."
                 />
                <DashboardCard
                    to="/dashboard/compañia"
                    svg="https://cdn.prod.website-files.com/64618a1be96ff28c75e090ea/64618a1be96ff28c75e09b72_icon3.svg"
                    title="Gestión de Compañias"
                    text="Administra las compañías registradas en la plataforma. Agrega, edita o elimina registros fácilmente desde este panel."
                 />
                <DashboardCard
                    to="/dashboard/products"
                    svg="https://cdn.prod.website-files.com/64618a1be96ff28c75e090ea/64618a1be96ff28c75e09aff_62cac080bd099a224af00c96_graphic-c.svg"
                    title="gestión de productos"
                    text="Administra los productos registradas en la plataforma. Agrega, edita o elimina registros fácilmente desde este panel."
                 />
                <DashboardCard
                    to="/dashboard/categorias"
                    svg="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/65ae6f072b9574a8e169f4cb_1.svg"
                    title="Gestión de Categorías"
                    text="Administra las categorías registradas en la plataforma. Agrega, edita o elimina registros fácilmente desde este panel."
                 />
            </section>
        </section>
    )
}