import axios from "axios";
import React, { useEffect, useState } from "react";
import { ConsumoProducts } from "../../PeticionesAPi/LandingPeticionesApi";

export const Card = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        async function PeticionProducts () {
            const data = await ConsumoProducts()
            setProducts(data)
        }

        PeticionProducts()
    },[])

    return (
        <>
            {products.map((product) => (
                <article className="" key={product.id}>
                    {/* PICTURE */}
                    <picture className="overflow-hidden bg-white w-full h-[400px] flex justify-center items-center rounded-[10px] max-md:h-[200px]">
                        <img
                            className="h-[80%]"
                            src={product.imageUrl}
                            alt="picture" />
                    </picture>
                    {/* BODY */}
                    <div className="">
                        <h4 className="my-[20px] max-md:my-[10px]">{product.name}</h4>
                        <p>Precio: ${product.price}</p>
                        <p>{product.description}</p>
                        <p className="italic underline">{product.category.name}</p>
                    </div>

                </article>
            ))}

        </>

    )
}