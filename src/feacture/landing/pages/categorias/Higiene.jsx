import React, { useEffect, useState } from "react";
import { Layout } from '../../layout/Layout'
import axios from "axios";
import { Title } from '../../components/Title'

export const Higiene = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const peticionApiProducts = () => {
            axios.get("http://localhost:3030/products/")
                .then((res) => {
                    console.log(res.data.products)
                    setProducts(res.data.products)
                })
        }

        peticionApiProducts()
    }, [])
    return (
        <>

            <section className="pt-[120px] max-w-[var(--max-w)] mx-auto px-[10px]">
                <Title title="Categoria/Higiene" />

                <div className="grid grid-cols-3 gap-[20px] max-md:grid-cols-2 max-md:gap-[10px]">
                    {products.map((product) => (
                        product.category.name === "Higiene" && (
                            <article className="">
                                {/* PICTURE */}
                                <picture className="bg-white w-full h-[400px] flex justify-center items-end rounded-[10px] max-md:h-[200px]">
                                    <img
                                        className="h-[90%] block"
                                        src={product.imageUrl}
                                        alt="picture" />
                                </picture>
                                {/* BODY */}
                                <div className="">
                                    <h4 className="my-[20px] max-md:my-[10px]">{product.name}</h4>
                                    <p>Precio: ${product.price}</p>
                                    <p>{product.description}</p>
                                </div>

                            </article>
                        )
                    ))}

                </div>

            </section>
        </>

    )

}