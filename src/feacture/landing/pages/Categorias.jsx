import React, { useEffect, useState } from "react";
import { Layout } from '../layout/Layout';
import { ConsumoCategories, ConsumoProducts } from "../PeticionesAPi/LandingPeticionesApi";
import { Title } from "../components/Title";

export const Categorias = () => {

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null); //  categoría seleccionada

    useEffect(() => {
        async function PeticionCategories() {
            const data = await ConsumoCategories();
            setCategories(data);
        }
        PeticionCategories();
    }, []);

    useEffect(() => {
        async function PeticionProducts() {
            const data = await ConsumoProducts();
            setProducts(data);
        }
        PeticionProducts();
    }, []);

    // Filtrar productos por categoría seleccionada
    const filteredProducts = selectedCategory
        ? products.filter(product => product.categoryId === selectedCategory)
        : products;

    return (
        <Layout>
            <section className="max-w-[var(--max-w)] pt-[120px] mx-auto px-[10px]">
                <Title title="categorias" />

                {/* NAVBAR BTN CATEGORIES */}
                <div className="flex gap-[10px] sticky top-[100px] flex-wrap">
                    {/* Botón para mostrar todos */}
                    <button
                        onClick={() => setSelectedCategory(null)}
                        className="categories__btn px-[16px] py-[4px] rounded-full border border-dashed cursor-pointer backdrop-blur-[10px] max-md:px-[8px] max-md:py-[0px] max-md:text-[10px]"
                    >
                        Todos
                    </button>
                    {categories.map((categorie) => (
                        <button
                            key={categorie.id}
                            onClick={() => setSelectedCategory(categorie.id)} //  click selecciona categoría
                            className={`categories__btn px-[16px] py-[4px] rounded-full border border-dashed cursor-pointer backdrop-blur-[10px] max-md:px-[8px] max-md:py-[0px] max-md:text-[10px] ${
                                selectedCategory === categorie.id ? "!bg-[var(--green)] text-white !border-[var(--green)]" : ""
                            }`}
                        >
                            {categorie.name}
                        </button>
                    ))}
                </div>

                {/* PRODUCT GRID */}
                <section className="mt-[80px] grid grid-cols-3 gap-[20px] max-md:grid-cols-2 max-md:gap-[10px]">
                    {filteredProducts.map((product) => (
                        <article key={product.id}>
                            <picture className="overflow-hidden bg-white w-full h-[400px] flex justify-center items-center rounded-[10px] max-md:h-[200px]">
                                <img className="h-[80%]" src={product.imageUrl} alt={product.name} />
                            </picture>
                            <div>
                                <h4 className="my-[20px] max-md:my-[10px]">{product.name}</h4>
                                <p>Precio: ${product.price}</p>
                                <p>{product.description}</p>
                                <p className="italic underline">{product.category?.name || "Sin rol"}</p>
                            </div>
                        </article>
                    ))}
                </section>
            </section>
        </Layout>
    );
};
