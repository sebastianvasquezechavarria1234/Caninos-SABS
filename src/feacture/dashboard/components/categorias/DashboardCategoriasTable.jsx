// TABLA DE CATEGORÍAS (MUESTRA, EDITA, ELIMINA)
import React, { useEffect, useState } from "react";
import { DeleteCategories, GetCategories } from "../../PeticionesApi/PeticionesCompanies";

export const DashboardCategoriaTable = ({ onEdit, reloadFlag }) => {
    const [categorias, setCategorias] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null); // para el modal

    // Cargar categorías desde la API
    const fetchCategorias = async () => {
        const data = await GetCategories();
        setCategorias(data);
    };

    // Recarga automática cada vez que reloadFlag cambia
    useEffect(() => {
        fetchCategorias();
    }, [reloadFlag]);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("¿Estás seguro de eliminar esta categoría?");
        if (!confirmDelete) return;

        try {
            await DeleteCategories(id);
            fetchCategorias(); // Volvemos a traer la lista
        } catch (error) {
            console.log("error al eliminar categoria", error);
        }
    };

    return (
        <section className="w-[75%]">
            {/* Encabezados */}
            <ul className="bg-white/20 grid gap-[5px] grid-cols-3 border-y border-dashed py-[10px]">
                <li><p className="italic underline pl-[20px] border-x border-dashed">Nombre:</p></li>
                <li><p className="italic underline pl-[20px] border-r border-dashed">Descripción:</p></li>
                <li><p className="italic underline pl-[20px] border-r border-dashed">Acciones</p></li>
            </ul>

            {/* Categorías */}
            {categorias.map((categoria) => (
                <ul key={categoria.id} className="grid gap-[5px] grid-cols-3 border-b border-dashed py-[10px]">
                    <li><p className="pl-[20px] line-clamp-1 border-x border-dashed">{categoria.name}</p></li>
                    <li><p className="pl-[20px] line-clamp-1 border-r border-dashed">{categoria.description}</p></li>
                    <li>
                        <p className="pl-[20px] border-r border-dashed flex gap-[10px]">
                            {/* Ver detalles */}
                            <span
                                className="cursor-pointer pt-[1px] px-[7px] bg-green-200"
                                onClick={() => setSelectedCategory(categoria)}
                            >
                                Ver
                            </span>
                            {/* Editar */}
                            <span
                                className="cursor-pointer pt-[1px] px-[7px] bg-blue-200"
                                onClick={() => onEdit(categoria)}
                            >
                                Editar
                            </span>
                            {/* Eliminar */}
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

            {/* MODAL DE DETALLES */}
            {selectedCategory && (
                <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center">
                    <div className="bg-white w-[400px] rounded-[20px] p-[20px] shadow-lg relative">
                        <h2 className="text-xl text-center mb-[20px]">Detalles de Categoría</h2>
                        <div className="bg-white shadow-md border border-black/10 p-[13px] rounded-[10px] mb-[10px]">
                            <p>Nombre: {selectedCategory.name}</p>
                        </div>
                        <div className="bg-white shadow-md border border-black/10 p-[13px] rounded-[10px]">
                            <p>Descripción: {selectedCategory.description}</p>
                        </div>
                        <button
                            onClick={() => setSelectedCategory(null)}
                            className="mt-[15px] btn bg-[var(--green)] text-white w-full flex justify-center cursor-pointer"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};
