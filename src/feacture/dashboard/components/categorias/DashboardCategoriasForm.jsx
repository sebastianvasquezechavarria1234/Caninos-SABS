// components/categorias/DashboardCategoriasForm.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

export const DashboardCategoriaForm = ({ selectedCategory, setSelectedCategory, reload }) => {
    const [formData, setFormData] = useState({ name: "", description: "" });

    useEffect(() => {
        if (selectedCategory) {
            setFormData({
                name: selectedCategory.name,
                description: selectedCategory.description
            });
        }
    }, [selectedCategory]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (selectedCategory) {
                // Editar
                await axios.put(`http://localhost:3030/categories/${selectedCategory.id}`, formData);
            } else {
                // Registrar
                await axios.post("http://localhost:3030/categories", formData);
            }
            setFormData({ name: "", description: "" });
            setSelectedCategory(null);
            reload();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="relative w-full p-[20px] rounded-[20px] shadow-lg bg-white border border-black/10">
            <h2 className="mb-[20px] text-center">Categorías</h2>

            {/* NOMBRE */}
            <label className="block mb top-[20px]">
                <p className="translate-y-[16px] translate-x-[4px] px-[4px] bg-white inline-flex">Nombre:</p>
                <input
                    className="w-full border border-black/10 rounded-[10px] bg-white p-[12px] outline-none shadow-md"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="por Ejemplo: juguetes"
                    minLength={3}
                    required
                />
            </label>

            {/* DESCRIPCIÓN */}
            <label className="block mb top-[20px]">
                <p className="translate-y-[16px] translate-x-[4px] px-[4px] bg-white inline-flex">Descripción:</p>
                <input
                    className="w-full border border-black/10 rounded-[10px] bg-white p-[12px] outline-none shadow-md"
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="----------"
                    required
                />
            </label>

            {/* SUBMIT */}
            <input
                className="mt-[20px] btn bg-[var(--green)] cursor-pointer text-white w-full"
                type="submit"
                value={selectedCategory ? "Actualizar Categoría" : "Registrar Categorías"}
            />
        </form>
    );
};
