import axios from "axios";
import React, { useEffect, useState } from "react";

export const DashboardUsersForm = ({ getUsers, userToEdit, setUserToEdit }) => {
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        password: "",
        roleId: "",
        companyId: "",
    });

    const [roles, setRoles] = useState([]);
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3030/roles/").then((res) => setRoles(res.data));
        axios.get("http://localhost:3030/companies/").then((res) => setCompanies(res.data));
    }, []);

    useEffect(() => {
        if (userToEdit) {
            setForm({
                fullName: userToEdit.fullName,
                email: userToEdit.email,
                password: "", // no mostramos contraseña
                roleId: userToEdit.roleId,
                companyId: userToEdit.companyId,
            });
        }
    }, [userToEdit]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (userToEdit) {
            axios
                .put(`http://localhost:3030/users/${userToEdit.id}`, form)
                .then(() => {
                    getUsers();
                    resetForm();
                });

            // Recargamos la página para ver los cambios
            window.location.reload()
        } else {
            axios
                .post("http://localhost:3030/users", form)
                .then(() => {
                    getUsers();
                    resetForm();
                });

            // Recargamos la página para ver los cambios
            window.location.reload()
        }
    };

    const resetForm = () => {
        setForm({ fullName: "", email: "", password: "", roleId: "", companyId: "" });
        setUserToEdit(null);
    };

    return (
        <form onSubmit={handleSubmit} className="relative w-full p-[20px] rounded-[20px] shadow-lg bg-white border border-black/10">
            <h2 className="mb-[20px] text-center">Usuarios</h2>
            <div className="flex gap-[10px]">
                <label className="block">
                    <p className="translate-y-[16px] translate-x-[4px] px-[4px] bg-white inline-flex">Nombre Completo:</p>
                    <input
                        className="w-full border border-black/10 rounded-[10px] bg-white p-[12px] outline-none shadow-md"
                        type="text"
                        placeholder="por Ejemplo: Jabón"
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        minLength={3}
                        required
                    />
                </label>

                <label className="block">
                    <p className="translate-y-[16px] translate-x-[4px] px-[4px] bg-white inline-flex">Email:</p>
                    <input
                        className="w-full border border-black/10 rounded-[10px] bg-white p-[12px] outline-none shadow-md"
                        type="email"
                        placeholder="sebas@gmail.com"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        minLength={3}
                        required
                    />
                </label>
            </div>

            {!userToEdit && (
                <label className="block">
                    <p className="translate-y-[16px] translate-x-[4px] px-[4px] bg-white inline-flex">Contraseña:</p>
                    <input
                        className="w-full border border-black/10 rounded-[10px] bg-white p-[12px] outline-none shadow-md"
                        type="password"
                        placeholder="****"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        minLength={3}
                        required
                    />
                </label>
            )}

            <label className="block">
                <p className="translate-y-[16px] translate-x-[4px] px-[4px] bg-white inline-flex">Rol:</p>
                <select
                    className="w-full border h-[55px] border-black/10 rounded-[10px] bg-white p-[12px] outline-none shadow-md"
                    name="roleId"
                    value={form.roleId}
                    onChange={handleChange}
                    required
                >
                    <option value="">Selecciona un rol</option>
                    {roles.map((rol) => (
                        <option key={rol.id} value={rol.id}>{rol.name}</option>
                    ))}
                </select>
            </label>

            <label className="block">
                <p className="translate-y-[16px] translate-x-[4px] px-[4px] bg-white inline-flex">Compañía:</p>
                <select
                    className="w-full border h-[55px] border-black/10 rounded-[10px] bg-white p-[12px] outline-none shadow-md"
                    name="companyId"
                    value={form.companyId}
                    onChange={handleChange}
                    required
                >
                    <option value="">Selecciona una compañía</option>
                    {companies.map((compani) => (
                        <option key={compani.id} value={compani.id}>{compani.name}</option>
                    ))}
                </select>
            </label>

            <input
                className="mt-[20px] btn bg-[var(--green)] cursor-pointer text-white w-full"
                type="submit"
                value={userToEdit ? "Actualizar usuario" : "Registrar usuario"}
            />
        </form>
    );
};
