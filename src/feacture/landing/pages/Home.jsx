import React from "react";
import { Layout } from "../layout/Layout";
import { Hero } from "../components/home/Hero";
import { Intro } from "../components/home/Intro";
import { Proveedores } from "../components/home/Proveedores";

export const Home = () => {
    return(
        <Layout>
            <Hero />
            <Proveedores />
            <Intro />
        </Layout>
    )
}