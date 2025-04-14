import React from "react";
import { Layout } from '../layout/Layout'
import { Form } from "../components/login/Form";
import { Title } from "../components/Title";

export const Login = () => {
    return (
        <Layout>
            <section className="pt-[120px] flex gap-[30px] max-w-[var(--max-w)] mx-auto px-[10px]">
                {/* LEFT */}
                <div className="w-[75%] flex gap-[20px] h-[400px]">
                    <picture className="relative w-[70%]  block ">
                        <img className="w-full h-full object-cover" src="https://www.dirtydogbeautyclub.com/cdn/shop/files/shi-tzu-flowers_1707x.jpg?v=1691791074" alt="" />

                        {/* SVG */}
                        <img className="absolute top-0 left-0 w-full h-full" src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/64618a1be96ff28c75e09a73_cost-subject-b.svg" alt="" />
                    </picture>

                    {/* DATA */}
                    <div className="w-[30%] flex flex-col justify-between">
                        <div className="">
                            <Title title="sabias que" />
                            <p className="mb-[10px]">• Tienen un olfato 100.000 veces más agudo que el humano</p>
                            <p className="mb-[10px]">• La huella de la nariz de un perro es única</p>
                            <p className="mb-[10px]">• Los perros sueñan, como nosotros</p>
                            <p className="mb-[10px]">• Pueden entender hasta 250 palabras y gestos</p>
                        {/*  */}
                        </div>
                        <img className="w-[150px]" src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/64618a1be96ff28c75e09392_bottom.svg" alt="" />
                    </div>

                </div>
                <Form />
            </section>
        </Layout>
    )

}