import React, { useState } from "react";
import { Title } from "../../landing/components/Title";
import { DashboardProductsForm } from "../components/products/DashboardProductsForm";
import { DashboardProductsTable } from "../components/products/DashboardProductsTable";


export const DashboardProducts = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <section className="w-full p-[20px]">
            <Title title="dashboard/Producto" />
            <section className="flex gap-[20px]">
                <div className="w-[25%]">
                    <DashboardProductsForm
                        selectedProduct={selectedProduct}
                        setSelectedProduct={setSelectedProduct}
                        setProducts={setProducts} // Pasamos la función setProducts
                    />
                </div>
                <DashboardProductsTable
                    products={products}
                    setSelectedProduct={setSelectedProduct}
                />
            </section>
        </section>
    );
};
