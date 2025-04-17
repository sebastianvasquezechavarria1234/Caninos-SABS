import axios from "axios";
import React, { useEffect, useState } from "react";

export const DashboardUsersForm = () => {

    // ROLES
    const [roles, setRoles] = useState([])

    useEffect(() => {
        const peticionApiRoles = () => {
            axios.get("http://localhost:3030/roles/")
                .then((res) => {
                    console.log("roles", res.data)
                    setRoles(res.data)
                })
        }

        peticionApiRoles()
    }, [])

    // CAMPAÑIAS
    const [companies, setCompanies] = useState([])

    useEffect(() => {
        const peticionApiCompanies = () => {
            axios.get("http://localhost:3030/companies/")
                .then((res) => {
                    console.log("companies", res.data)
                    setCompanies(res.data)
                })
        }

        peticionApiCompanies()
    }, [])


    return (
        <form
            className="relative w-full p-[20px] rounded-[20px] shadow-lg bg-white border border-black/10"

        >
            <h2 className="mb-[20px] text-center">Usuarios</h2>
            <div className="flex gap-[10px]">
                {/* NOMRBE */}
                <label className="block mb top-[20px]">
                    <p className="translate-y-[16px] translate-x-[4px] px-[4px] bg-white inline-flex">Nombre Completo:</p>
                    <input
                        className="w-full border border-black/10 rounded-[10px] bg-white p-[12px] outline-none shadow-md"
                        type="text"
                        placeholder="por Ejemplo: Jabón"

                        minLength={3}
                        required
                    />
                </label>

                {/* EMIAL */}
                <label className="block">
                    <p className="translate-y-[16px] translate-x-[4px] px-[4px] bg-white inline-flex">Email:</p>
                    <input
                        className="w-full border border-black/10 rounded-[10px] bg-white p-[12px] outline-none shadow-md"
                        type="email"
                        placeholder="sebas@gmail.com"

                        minLength={3}
                        required
                    />
                </label>
            </div>
                {/* PASSWORD */}
                <label className="block">
                    <p className="translate-y-[16px] translate-x-[4px] px-[4px] bg-white inline-flex">Contraseña:</p>
                    <input
                        className="w-full border border-black/10 rounded-[10px] bg-white p-[12px] outline-none shadow-md"
                        type="password"
                        placeholder="****"

                        minLength={3}
                        required
                    />
                </label>
            {/* ROLES */}
            <label className="block">
                <p className="translate-y-[16px] translate-x-[4px] px-[4px] bg-white inline-flex">Rol:</p>
                <select
                    className="w-full border h-[55px] border-black/10 rounded-[10px] bg-white p-[12px] outline-none shadow-md"
                    required
                >
                    {roles.map((rol) => (
                        <option value={rol.name}>{rol.name}</option>

                    ))}
                </select>
            </label>

            {/* COMPAÑIAS */}
            <label className="block">
                <p className="translate-y-[16px] translate-x-[4px] px-[4px] bg-white inline-flex">Compañia:</p>
                <select
                    className="w-full border h-[55px] border-black/10 rounded-[10px] bg-white p-[12px] outline-none shadow-md"
                    required
                >
                    {companies.map((compani) => (
                        <option value={compani.name}>{compani.name}</option>

                    ))}
                </select>
            </label>






            {/* SUBMIT */}

            <input
                className="mt-[20px] btn bg-[var(--green)] cursor-pointer text-white w-full"
                type="submit"
                value="Registrar usuario"
            />
        </form>
    )
}