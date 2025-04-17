import React from "react";
import { NuestroEquipo } from '../quienesSomos/NuestroEquipo'
import { Hero } from "../home/Hero";

export const Content = () => {
    return (
        <section className=" max-w-[var(--max-w)] mx-auto px-[10px]">

            <Hero
                titleTop="Quines somos"
                img="https://www.dirtydogbeautyclub.com/cdn/shop/files/disco_dogs_1218x.jpg?v=1681163723"
                title="Somos pasión por los perros: amor, respeto y compromiso"
                text="Para nosotros no se trata solo de cuidar animales, sino de entenderlos, respetarlos y brindarles una vida plena. Cada ladrido cuenta una historia, cada gesto expresa una emoción, y cada perro que conocemos deja una huella en nuestro corazón"
                 />
         


            {/*  */}

            {/* GRID */}
            <div className="grid grid-cols-3 gap-[30px] mt-[30px] max-md:grid-cols-1 max-md:gap-[10px]">
                {/*  */}
                <article className=" pt-[60px] max-md: pt-[0px] max-md:bg-white max-md:p-[10px] max-md:rounded-[4px]">
                    <img
                        className="w-[50px] mb-[20px] max-md:w-[30px] max-md:mb-[10px]"
                        src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090ea/64618a1be96ff28c75e0982f_62caf3f09e6ac4c1a9defc3e_icon-2.svg"
                        alt="" />
                    <h4 className="mb-[20px] max-md:mb-[10px]">Quienes somos</h4>
                    <p>En BCaninos SABS, creemos que cada perro tiene una historia única que merece ser contada, acompañada y cuidada. No somos solo un servicio, somos una familia dedicada a acompañar el vínculo más sincero y puro que existe: el que une a una persona con su mascota.</p>
                </article>

                {/*  */}
                <article className=" pt-[60px] max-md: pt-[0px] max-md:bg-white max-md:p-[10px] max-md:rounded-[4px]">
                    <img
                        className="w-[50px] mb-[20px] max-md:w-[30px] max-md:mb-[10px]"
                        src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090ea/64618a1be96ff28c75e09907_icon-2%20(4).svg"
                        alt="" />
                    <h4 className="mb-[20px] max-md:mb-[10px]">Misiòn</h4>
                    <p>Nuestra misión es simple, pero poderosa: mejorar la vida de los perros y sus familias, brindando una atención integral, amorosa y profesional.</p>
                </article>

                {/*  */}
                <article className=" pt-[60px] max-md: pt-[0px] max-md:bg-white max-md:p-[10px] max-md:rounded-[4px]">
                    <img

                        className="w-[50px] mb-[20px] max-md:w-[30px] max-md:mb-[10px]"
                        src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090ea/64618a1be96ff28c75e09962_icon-5.svg"
                        alt="" />
                    <h4 className="mb-[20px] max-md:mb-[10px]">Vision</h4>
                    <p>Soñamos con transformar la forma en que se vive la experiencia de tener una mascota: que cada visita, cada encuentro, cada interacción refuerce el lazo afectivo entre las personas y sus perros.</p>
                </article>
            </div>


            {/* LEFT */}
            <NuestroEquipo />
        </section>
    )
}