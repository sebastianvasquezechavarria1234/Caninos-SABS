import axios from "axios";
import React, { useEffect, useState } from "react";

export const Card = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const peticionProducts = () => {
            axios.get("http://localhost:3030/products/")
                .then((res) => {
                    setProducts(res.data.products)
                })
        }

        peticionProducts()
    }, [])

    return (
        <>
            {products.map((product) => (
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
            ))}

        </>

    )
}