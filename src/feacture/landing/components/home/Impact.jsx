import React from "react";
import { Title } from "../Title";
import { ImpactCard } from "./ImpactCard";

export const Impact = () => {
    return(
        <section className="bg-[var(--green)] text-[var(--blue)]">
            {/* MAX W */}
            <section className="max-w-[var(--max-w)] mx-auto px-[10px]">
                <Title title="El impacto de Caninos SABS" />

                {/* GRID */}
                <div className="grid grid-cols-4 gap-[30px] max-lg:grid-cols-2 max-md:grid-cols-1">
                    <ImpactCard
                        number="80%"
                        title="de clientes fieles"
                        subTitle="Nos recomiendan por la calidad, atención y amor que damos a cada peludo."
                     />
                    <ImpactCard
                        number="85%"
                        title="de clientes satisfechos"
                        subTitle="Destacan la atención, el cariño y la entrega rápida."
                     />
                    <ImpactCard
                        number="95%"
                        title="de perritos más felices"
                        subTitle="Disfrutan más su día con nuestros productos naturales."
                     />
                    <ImpactCard
                        number="60%"
                        title="menos visitas al vet"
                        subTitle="Gracias a nuestros productos que cuidan su salud."
                     />
                    
                </div>
            </section>

            {/* TEXTIMONIO */}

            <section className="relative bg-[url(/ola.svg)] bg-no-repeat bg-cover pb-[120px] px-[10px]">
                {/* TOP */}

                    {/* FLEX */}
                    <div className="flex items-center gap-[30px] max-w-[900px] mx-auto pt-[180px] max-md:flex-col max-md:pt-[80px] mt-[60px]">
                        {/* PICTURE */}
                        <picture className="z-20 rotate-[-5deg] w-[35%] relative p-[15px_15px_80px_15px] bg-white rounded-[10px] max-md:max-w-[50%] justify-center max-md:w-[70%]">
                            {/* CIRCLE */}
                            <img 
                                className="absolute top-[-20%] left-[-20%] w-[60%]" 
                                    src="https://cdn.prod.website-files.com/5e823a3a5b1fcd1c7669c3da/641a2a83a257948c8ee563ea_icon%20(1).svg" 
                                    alt="" />
                            {/* PERSON */}
                            <img 
                                className="w-[300px]" 
                                    src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/64618a1be96ff28c75e09a7c_jason.jpg" 
                                    alt="" />
                        </picture>

                        {/* TESTIMONIO */}
                        <div className="w-[60%] max-md:w-full">
                            <h4>“Desde que descubrí los productos de esta tienda, mi perrita Luna está más activa, saludable y feliz. He probado desde juguetes hasta suplementos, y todo ha superado mis expectativas. Se nota que hay amor y calidad en cada detalle. ¡Totalmente recomendados!”</h4>

                            <p className=" mt-[30px] italic underline">— Jail Lopez, Veterinaria 🐾</p>
                        </div>
                    </div>
                
            
            </section>
        </section>
    )
}