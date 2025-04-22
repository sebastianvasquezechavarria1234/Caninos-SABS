// FORMULARIO PARA REGISTRAR O EDITAR CATEGORÍAS
import React, { useEffect, useState } from "react";
import axios from "axios";

export const DashboardCategoriaForm = ({ selectedCategory, setSelectedCategory, reload }) => {
    const [formData, setFormData] = useState({ name: "", description: "" });

    // Si el usuario quiere editar una categoría, llenamos el formulario con sus datos
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
                // Si hay categoría seleccionada, se actualiza
                await axios.put(`http://localhost:3030/categories/${selectedCategory.id}`, formData);
                alert("Datos actualizados correctamente")
            } else {
                // Si no hay, se crea una nueva
                await axios.post("http://localhost:3030/categories", formData);
                alert("Datos registrados correctamente")
            }

            // Limpiamos el formulario y avisamos que recargue la tabla
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

            <input
                className="mt-[20px] btn bg-[var(--green)] cursor-pointer text-white w-full"
                type="submit"
                value={selectedCategory ? "Actualizar Categoría" : "Registrar Categorías"}
            />
        </form>
    );
};
