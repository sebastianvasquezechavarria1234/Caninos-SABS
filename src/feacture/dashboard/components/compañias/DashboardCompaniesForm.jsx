import React, { useState } from "react";
import axios from "axios";

export const DashboardCompaniesForm = () => {

    // REGISTER DATA
    const [formData, setFormData] = useState({
        name: "",
        nit: "",
        phone: "",
        address: "",
        email: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:3030/companies", formData);
            alert("¡Compañía registrada!");
            console.log("Respuesta:", res.data);
            // Limpia el form
            setFormData({
                name: "",
                nit: "",
                phone: "",
                address: "",
                email: "",
            });
        } catch (error) {
            console.error("Error:", error.response?.data || error.message);
            alert("Error al registrar: " + (error.response?.data?.error || "ver consola"));
        }

      
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="relative w-full p-[20px] rounded-[20px] shadow-lg bg-white border border-black/10"
        >
            <h2 className="mb-[20px] text-center">Compañías</h2>

            <div className="flex gap-[10px]">
                {/* NOMBRE */}
                <label className="block w-[50%] mb top-[20px]">
                    <p className="translate-y-[16px] translate-x-[4px] px-[4px] bg-white inline-flex">Nombre:</p>
                    <input
                        className="w-full border border-black/10 rounded-[10px] bg-white p-[12px] outline-none shadow-md"
                        type="text"
                        name="name"
                        placeholder="por Ejemplo: compañia"
                        minLength={3}
                        required
                        value={formData.name}
                        onChange={handleChange}
                    />
                </label>

                {/* NIT */}
                <label className="block w-[50%] mb top-[20px]">
                    <p className="translate-y-[16px] translate-x-[4px] px-[4px] bg-white inline-flex">NIT:</p>
                    <input
                        className="w-full border border-black/10 rounded-[10px] bg-white p-[12px] outline-none shadow-md"
                        type="text"
                        name="nit"
                        placeholder="901234567-1"
                        required
                        value={formData.nit}
                        onChange={handleChange}
                    />
                </label>
            </div>

            <div className="flex gap-[10px]">
                {/* TELÉFONO */}
                <label className="block w-[50%]">
                    <p className="translate-y-[16px] translate-x-[4px] px-[4px] bg-white inline-flex">Teléfono:</p>
                    <input
                        className="w-full border border-black/10 rounded-[10px] bg-white p-[12px] outline-none shadow-md"
                        type="text"
                        name="phone"
                        placeholder="3015857443"
                        minLength={3}
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </label>

                {/* EMAIL */}
                <label className="block w-[50%]">
                    <p className="translate-y-[16px] translate-x-[4px] px-[4px] bg-white inline-flex">Email:</p>
                    <input
                        className="w-full border border-black/10 rounded-[10px] bg-white p-[12px] outline-none shadow-md"
                        type="email"
                        name="email"
                        placeholder="Por ejem: compani@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
            </div>

            {/* DIRECCIÓN */}
            <label className="block">
                <p className="translate-y-[16px] translate-x-[4px] px-[4px] bg-white inline-flex">Dirección:</p>
                <input
                    className="w-full border border-black/10 rounded-[10px] bg-white p-[12px] outline-none shadow-md"
                    type="text"
                    name="address"
                    placeholder="Por ejem: CALL 11 54-62"
                    value={formData.address}
                    onChange={handleChange}
                />
            </label>

            {/* SUBMIT */}
            <input
                className="mt-[20px] btn bg-[var(--green)] cursor-pointer text-white w-full"
                type="submit"
                value="Registrar Compañía"
            />
        </form>
    );
};
