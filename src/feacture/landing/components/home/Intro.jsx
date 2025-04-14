import React from "react";
import { Title } from "../Title";
import { CardSlider } from "./CardSlider";

export const Intro = () => {
    return(
        <section className="mt-[120px] bg-[var(--green)] text-[var(--blue)] py-[120px] max-md:py-[60px] max-md:mt-[60px]">
            {/* MAX W */}
            <section className="max-w-[var(--max-w)] px-[10px] mx-auto">
                <Title title="Conoce nuestro shou"/>
                <div className="relative flex max-lg:flex-col">
                    <div className="w-[60%] max-lg:w-full">
                    {/* TITLE */}
                        <h2 className=" mb-[20px]">Belleza, Nobleza y Mucho Amor: Ellos Son Nuestros Caninos Estrella</h2>
                        <p>Cada uno de estos perros representa lo mejor del mundo canino: su elegancia natural, su carácter leal y esa capacidad infinita de dar amor sin pedir nada a cambio. Son más que mascotas: son compañeros, protectores, familia.</p>
                    </div>
                    {/* PICTURE */}
                    <picture className="relative flex items-end pb-[40px] w-[40%] max-lg:w-full max-lg:absolute max-lg:-z-30">
                        <img 
                            className="" 
                            src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/64618a1be96ff28c75e09a15_squiggle-white.svg" 
                            alt="" />

                            {/* CIRCLE */}
                            <div className="absolute top-[0] right-[10%] rounded-full w-[150px] h-[150px] block bg-[var(--purple)]"></div>

                    </picture>

                </div>
            </section>

            {/* SLIDER */}
            <section className="overflow-hidden mt-[40px]">
                <ul className=" slider px-[10px] flex gap-[20px] w-[200%] max-md:w-[400%] max-md:gap-[10px]">
                    <CardSlider
                        svg="https://cdn.prod.website-files.com/64618a1be96ff28c75e090ea/64618a1be96ff28c75e09aff_62cac080bd099a224af00c96_graphic-c.svg" 
                        img="https://www.dirtydogbeautyclub.com/cdn/shop/files/brown_bg_645x.jpg?v=1680902305"
                    />
                    <CardSlider
                        svg="https://cdn.prod.website-files.com/64618a1be96ff28c75e090ea/64618a1be96ff28c75e09b71_icon.svg" 
                        img="https://www.dirtydogbeautyclub.com/cdn/shop/files/green-blue_bg_645x.jpg?v=1680902232"
                    />
                    <CardSlider
                        svg="https://cdn.prod.website-files.com/64618a1be96ff28c75e090ea/64618a1be96ff28c75e09afb_marcella.svg" 
                        img="https://www.dirtydogbeautyclub.com/cdn/shop/files/butterpup-thumbnaildesktop_720_645x.png?v=1686863567"
                    />
                    <CardSlider
                        svg="https://cdn.prod.website-files.com/64618a1be96ff28c75e090ea/64618a1be96ff28c75e09aff_62cac080bd099a224af00c96_graphic-c.svg" 
                        img="https://www.dirtydogbeautyclub.com/cdn/shop/files/green_bg_645x.jpg?v=1680902076"
                    />
                    <CardSlider
                        svg="https://cdn.prod.website-files.com/64618a1be96ff28c75e090ea/64618a1be96ff28c75e09b71_icon.svg" 
                        img="https://www.dirtydogbeautyclub.com/cdn/shop/files/green-blue_bg_645x.jpg?v=1680902232"
                    />
                    <CardSlider
                        svg="https://cdn.prod.website-files.com/64618a1be96ff28c75e090ea/64618a1be96ff28c75e09afb_marcella.svg" 
                        img="https://www.dirtydogbeautyclub.com/cdn/shop/files/bulldog-puppy-web_645x.jpg?v=1691174416"
                    />
                    <CardSlider
                        svg="https://cdn.prod.website-files.com/64618a1be96ff28c75e090ea/64618a1be96ff28c75e09aff_62cac080bd099a224af00c96_graphic-c.svg" 
                        img="https://www.dirtydogbeautyclub.com/cdn/shop/files/green_bg_645x.jpg?v=1680902076"
                    />
                    <CardSlider
                        svg="https://cdn.prod.website-files.com/64618a1be96ff28c75e090ea/64618a1be96ff28c75e09b71_icon.svg" 
                        img="https://www.dirtydogbeautyclub.com/cdn/shop/files/green-blue_bg_645x.jpg?v=1680902232"
                    />
                    <CardSlider
                        svg="https://cdn.prod.website-files.com/64618a1be96ff28c75e090ea/64618a1be96ff28c75e09afb_marcella.svg" 
                        img="https://www.dirtydogbeautyclub.com/cdn/shop/files/bulldog-puppy-web_645x.jpg?v=1691174416"
                    />
                </ul>
            </section>
        </section>
    )
}