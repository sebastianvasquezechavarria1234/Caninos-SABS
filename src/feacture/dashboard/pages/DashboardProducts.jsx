import React, { useState, useEffect } from "react";
import axios from "axios";
import { Title } from "../../landing/components/Title";
import { DashboardProductsForm } from "../components/products/DashboardProductsForm";
import { DashboardProductsTable } from "../components/products/DashboardProductsTable";

export const DashboardProducts = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    // Función para obtener los productos del servidor
    const fetchProducts = async () => {
        try {
            const res = await axios.get("http://localhost:3030/products/");
            setProducts(res.data.products); // Asumiendo que la respuesta tiene una propiedad 'products'
        } catch (error) {
            console.error("Error al cargar productos:", error);
        }
    };

    // Cargar productos al montar el componente
    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <section className="w-full p-[20px]">
            <Title title="dashboard/Producto" />
            <section className="flex gap-[20px]">
                <div className="w-[25%]">
                    <DashboardProductsForm
                        selectedProduct={selectedProduct}
                        setSelectedProduct={setSelectedProduct}
                        fetchProducts={fetchProducts}
                    />
                </div>
                <DashboardProductsTable
                    products={products}
                    setSelectedProduct={setSelectedProduct}
                    fetchProducts={fetchProducts}
                />
            </section>
        </section>
    );
};