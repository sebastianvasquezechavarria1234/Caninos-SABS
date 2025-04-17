import React, { useEffect, useState } from "react";
import axios from "axios";

export const DashboardProductsTable = () => {
    const [products, setProducts] = useState([]);

    // Función para obtener productos
    const fetchProducts = () => {
        axios
            .get("http://localhost:3030/products/")
            .then((res) => {
                setProducts(res.data.products);
            })
            .catch((err) => {
                console.error("Error al obtener productos:", err);
            });
    };

    useEffect(() => {
        fetchProducts(); // Obtener productos al cargar el componente
    }, []);

    return (
        <section className="w-[75%]">
            {/* Encabezado */}
            <ul className="bg-white/20 grid gap-[5px] grid-cols-5 border-y border-dashed py-[10px]">
                <li><p className="italic underline pl-[20px] border-l border-dashed">Imagen</p></li>
                <li><p className="italic underline pl-[20px] border-x border-dashed">Nombre</p></li>
                <li><p className="italic underline pl-[20px] border-r border-dashed">Precio</p></li>
                <li><p className="italic underline pl-[20px] border-r border-dashed">Categoría</p></li>
                <li><p className="italic underline pl-[20px] border-r border-dashed">Acciones</p></li>
            </ul>

            {/* Lista de productos */}
            {products.map((product) => (
                <ul className="grid gap-[5px] grid-cols-5 border-b border-dashed py-[10px]" key={product.id}>
                    <li>
                        <p className="pl-[20px] border-l border-dashed">
                            <img className="bg-red-600 w-[20px] h-[20px]" src={product.imageUrl} alt="avatar" />
                        </p>
                    </li>
                    <li>
                        <p className="pl-[20px] line-clamp-1 border-x border-dashed">{product.name}</p>
                    </li>
                    <li>
                        <p className="pl-[20px] line-clamp-1 border-r border-dashed">{product.price}</p>
                    </li>
                    <li>
                        <p className="pl-[20px] line-clamp-1 border-r border-dashed">{product.category.name}</p>
                    </li>
                    <li>
                        <p className="pl-[20px] line-clamp-1 border-r border-dashed">Acciones</p>
                    </li>
                </ul>
            ))}
        </section>
    );
};
