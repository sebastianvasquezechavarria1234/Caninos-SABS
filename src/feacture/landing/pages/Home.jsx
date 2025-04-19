import React from "react";
import { Layout } from "../layout/Layout";
import { Hero } from "../components/home/Hero";
import { Intro } from "../components/home/Intro";
import { Proveedores } from "../components/home/Proveedores";
import { Impact } from "../components/home/Impact";
import { HomeCategories } from "../components/home/HomeCategories";

export const Home = () => {
    return(
        <Layout>
            <Hero 
                titleTop="Home"
                img="https://www.dirtydogbeautyclub.com/cdn/shop/files/dogs-on-a-raft_aca9444b-5bd8-4e4f-8ae1-4899dccd70d1_959x.jpg?v=1692671750"
                title="Comprometidos con el bienestar de quien siempre está a tu lado."
                text="En Caninos SABS nos dedicamos con pasión al bienestar de tu compañero de cuatro patas.
                Desde productos especializados hasta servicios de calidad."
                />
            <Proveedores />
            <Intro />
            <Impact />
            <HomeCategories />
        </Layout>
    )
}