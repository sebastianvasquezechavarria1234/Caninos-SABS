import axios from "axios";
import React, { useEffect, useState } from "react";
import { DeleteCategories, GetCategories } from "../../PeticionesApi/DashboardPeticionesApi";

export const DashboardCategoriaTable = ({ onEdit, reloadFlag, setReloadFlag }) => {
    const [categorias, setCategorias] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

   
    // TRAEMOS LA API DE CATEGORIAS

    useEffect(() => {
        async function PeticionCategories () {
            const data = await GetCategories()
            setCategorias(data)
        }

        PeticionCategories()
    },[])



    // ELIMINAMOS 
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("¿Estás seguro de eliminar esta categoría?");
        if (!confirmDelete) return;

        // ELIMINAMOS LLAMANDO A DELETE CATEGORIES
        try {
            await DeleteCategories(id)
        } catch (error) {
            console.log("error al eliminar categoria", error)
        }

    };

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

            {categorias.map((categoria) => (
                <ul key={categoria.id} className="grid gap-[5px] grid-cols-3 border-b border-dashed py-[10px]">
                    <li>
                        <p className="pl-[20px] line-clamp-1 border-x border-dashed">{categoria.name}</p>
                    </li>
                    <li>
                        <p className="pl-[20px] line-clamp-1 border-r border-dashed">{categoria.description}</p>
                    </li>
                    <li>
                        <p className="pl-[20px] border-r border-dashed flex gap-[10px]">
                            <span
                                className="cursor-pointer pt-[1px] px-[7px] bg-green-200"
                                onClick={() => setSelectedCategory(categoria)}
                            >
                                Ver
                            </span>
                            <span
                                className="cursor-pointer pt-[1px] px-[7px] bg-blue-200"
                                onClick={() => onEdit(categoria)}
                            >
                                Editar
                            </span>
                            <span
                                className="cursor-pointer pt-[1px] px-[7px] bg-red-200"
                                onClick={() => handleDelete(categoria.id)}
                            >
                                Eliminar
                            </span>
                        </p>
                    </li>
                </ul>
            ))}

            {/* MODAL INCLUIDO AQUÍ MISMO */}
            {selectedCategory && (
                <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center">
                    <div className="bg-white w-[400px] rounded-[20px] p-[20px] shadow-lg relative">

                        <h2 className="text-xl text-center mb-[20px]">Detalles de Categoría</h2>

                        <div className="bg-white shadow-md border border-black/10 p-[13px] rounded-[10px] flex items-center gap-[10px] mb-[10px]">
                            <p>Nombre: {selectedCategory.name}</p>
                        </div>

                        <div className="bg-white shadow-md border border-black/10 p-[13px] rounded-[10px] flex items-center gap-[10px]">
                            <p>Descripción: {selectedCategory.description}</p>
                        </div>
                        {/* Botón para cerrar */}
                        <button
                            onClick={() => setSelectedCategory(null)}
                            className="mt-[15px] btn bg-[var(--green)] text-white w-full flex items-center justify-center cursor-pointer"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};
