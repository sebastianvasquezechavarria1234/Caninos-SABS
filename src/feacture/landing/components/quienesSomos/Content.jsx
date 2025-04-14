import React from "react";
import { Title } from "../Title";
import { SideBard } from "./SideBard";
import { Mision } from "./Mision";
import { Vision } from "./Vision";
import { NuestroEquipo } from "./NuestroEquipo";

export const Content = () => {
    return (
        <section className="pt-[120px] max-w-[var(--max-w)] mx-auto px-[10px] flex gap-[30px]">
            {/* LEFT */}
            <section className="w-[65%]">
                <Title title="Contenido" />
                {/* TOP */}
                <picture className="relative w-full block h-[550px]">
                    {/* dog */}
                    <img 
                        className="h-full w-full object-cover" 
                        src="https://www.dirtydogbeautyclub.com/cdn/shop/files/desktop-new-about_1600x.png?v=1697411967" 
                        alt="" />

                    {/* z index */}
                    <img 
                        className="absolute w-full top-0 left-0 h-full object-cover" 
                        src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/64618a1be96ff28c75e09a75_cost-subject-a.svg" 
                        alt="" />

                    {/* LEFT */}
                    <img className="absolute left-[-30%] top-[10%]" src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/64618a1be96ff28c75e093eb_squiggle.svg" alt="" />

                </picture>
                {/* ARTICLE 1 */}
                <article className="mt-[120px] border-t border-dashed pt-[20px]">
                    <h2 className="mb-[20px] flex gap-[20px] items-center">
                        <picture className="bg-[#c69693] w-[40px] h-[40px] flex justify-center items-center rounded-[8px]">
                            <img
                                className="w-[60%]"
                                src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/6462230cf8fe494f03fdccfc_mission.svg"
                                alt="quienes somos icons" />
                        </picture>
                        ¿Quiénes Somos?

                    </h2>
                    <ul className="grid grid-cols-2 gap-[20px]">
                        <p className="mb-[20px]">● En BCaninos SABS, creemos que cada perro tiene una historia única que merece ser contada, acompañada y cuidada. No somos solo un servicio, somos una familia dedicada a acompañar el vínculo más sincero y puro que existe: el que une a una persona con su mascota.</p>
                        <p className="mb-[20px]">● Nuestra historia nace del amor profundo por los animales y del deseo genuino de brindarles una vida más saludable, feliz y plena. Conformamos un equipo humano con vocación, formado por profesionales, cuidadores, amantes de los animales y personas que entienden que trabajar con perros no es solo una ocupación, sino una forma de vida.</p>
                        <p className="mb-[20px]">● A lo largo del tiempo, hemos aprendido que el bienestar de una mascota impacta directamente en la calidad de vida de las personas que la rodean. Por eso, nuestro trabajo no se limita a los cuidados físicos o al asesoramiento técnico. Buscamos comprender a cada canino, entender sus necesidades, sus emociones, sus tiempos. Nos importa su personalidad, su energía, su forma de mirar. Porque cada perro tiene una esencia, y eso lo hace irrepetible.</p>
                        <p className="mb-[20px]">● BCaninos SABS es ese espacio donde la ciencia se encuentra con el cariño, donde el conocimiento se mezcla con la empatía, y donde cada decisión se toma con respeto por la vida y la individualidad de cada ser.</p>
                        <p className="mb-[20px]">● Nuestra comunidad crece con cada familia que nos elige, con cada historia compartida y con cada cola que se mueve al cruzar nuestra puerta. Trabajamos día a día para ser merecedores de esa confianza, con responsabilidad, pasión y entrega.</p>

                    </ul>

                </article>

                <Mision />
                <Vision />
                <NuestroEquipo />

            </section>

            {/* RIGHT */}

            <SideBard />
        </section>
    )
}