import React from "react";
import { Layout } from '../layout/Layout'
import { Title } from "../components/Title";
import { Card } from "../components/products/Card";
import { Hero } from "../components/home/Hero";

export const Products = () => {
    return (
        <Layout>
            <Hero
                titleTop="Productos"
                img="https://www.dirtydogbeautyclub.com/cdn/shop/files/pug_flowers_1218x.jpg?v=1681163523"
                title="Productos pensados para su felicidad y bienestar."
                text="En Caninos SABS nos especializamos en ofrecer artículos de calidad para cada etapa de la vida de tu compañero peludo. Desde alimentos nutritivos hasta accesorios que lo hacen sentir especial."

            />
            <section className="pt-[120px] max-w-[var(--max-w)] mx-auto px-[10px]">
            <Title title="productos" />


                {/* GRID */}
                <div className="grid grid-cols-3 gap-[20px] max-md:grid-cols-2 max-md:gap-[10px]">
                    <Card />
                </div>
            </section>
        </Layout>
    )
}