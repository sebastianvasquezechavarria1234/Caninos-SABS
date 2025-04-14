import React from "react";

export const Mision = () => {
    return (
        <article className="mt-[120px] border-t border-dashed pt-[20px]">
            <h2 className="mb-[20px] flex gap-[20px]">
                <picture className="bg-[#96c9e9] w-[60px] h-[60px] flex justify-center items-center rounded-[8px]">
                    <img
                        className="w-[60%]"
                        src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/6462231c11bbcbfdd7d1e492_team.svg"
                        alt="quienes somos icons" />
                </picture> Misión
            </h2>
            <ul className="grid grid-cols-2 gap-[20px]">
                <p className="mb-[20px]">● Nuestra misión es simple, pero poderosa: mejorar la vida de los perros y sus familias, brindando una atención integral, amorosa y profesional.</p>
                <p className="mb-[20px]">● Nos proponemos crear un entorno donde las necesidades físicas, emocionales y sociales de los caninos sean atendidas de forma respetuosa, consciente y personalizada.</p>
                <p className="mb-[20px]">● Queremos ser aliados en el día a día de quienes aman a sus mascotas, aportando soluciones reales, educación responsable y experiencias positivas.</p>
                <p className="mb-[20px]">● Promovemos una convivencia armoniosa entre humanos y perros, apoyando la adopción responsable, el respeto a la naturaleza animal y la construcción de vínculos sanos basados en la confianza y el afecto.</p>

            </ul>

        </article>
    )
}