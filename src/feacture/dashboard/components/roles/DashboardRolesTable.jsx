import axios from "axios";
import React, { useEffect, useState } from "react";

export const DashboardRolesTable = () => {

    const [roles, setRoles] = useState([])

    useEffect(() => {
        const peticionApiRoles = () => {
            axios.get("http://localhost:3030/roles/")
                .then((res) => {
                    console.log(res.data)
                    setRoles(res.data)
                })
        }
        peticionApiRoles()
    }, [])
    return (
        <section className="w-[75%]">
            <ul className="bg-white/20 grid gap-[5px] grid-cols-3 border-y border-dashed py-[10px]">
                <li>
                    <p className="italic underline pl-[20px] border-x border-dashed">Nombre:</p>
                </li>
                <li>
                    <p className="italic underline pl-[20px] border-r border-dashed">Descripción:</p>
                </li>
                <li>
                    <p className="italic underline pl-[20px] border-r border-dashed">Acciones</p>
                </li>
            </ul>
            {/* MAP */}
            {roles.map((rol) => (
                <ul className=" grid gap-[5px] grid-cols-3 border-b border-dashed py-[10px]">
                    <li>
                        <p className="pl-[20px] line-clamp-1 border-x border-dashed">{rol.name}</p>
                    </li>
                    <li>
                        <p className="pl-[20px] line-clamp-1 border-r border-dashed">{rol.description}</p>
                    </li>
                    <li>
                        <p className="pl-[20px] border-r border-dashed flex gap-[10px]">
                            {/* ICON VER */}
                            <span className="cursor-pointer pt-[1px] px-[7px] bg-green-200">
                                Ver
                            </span>
                            {/* ICON EDITAR */}
                            <span className="cursor-pointer pt-[1px] px-[7px] bg-blue-200">
                                Editar
                            </span>
                            {/* ICON ELIMINAR */}
                            <span
                                className="cursor-pointer pt-[1px] px-[7px] bg-red-200">
                                Eliminar
                            </span>
                        </p>
                    </li>
                </ul>

            ))}


        </section>

    )
}