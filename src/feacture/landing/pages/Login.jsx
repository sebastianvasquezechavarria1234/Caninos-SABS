import React from "react";
import { Layout } from '../layout/Layout'
import { Form } from "../components/login/Form";
import { Title } from "../components/Title";

export const Login = () => {
    return (
        <Layout>
            <section className="pt-[120px] relative flex justify-center flex-col items-center  max-w-[var(--max-w)] mx-auto px-[10px]">
                {/* RAYA */}      
                <img 
                    className=" w-[27%] absolute top-[20%] left-[-10%]" 
                    src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/64618a1be96ff28c75e093eb_squiggle.svg" 
                    alt="banner" />
                {/* RAYA R */}      
                <img 
                    className="rotate-[80deg] w-[20%] absolute bottom-[-10%] right-[10%]" 
                    src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/64618a1be96ff28c75e09399_Squiggle%20(1).svg" 
                    alt="banner" />
                {/* CIRCLE */}      
                <img 
                    className="w-[10%] absolute top-[28%] left-[34%]" 
                    src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/6462021516105ccdecb250c3_moving-circles-animation.svg" 
                    alt="banner" />
                {/* TOP */}
                <article className="flex flex-col items-center mb-[60px]">
                    {/* CIRCLE */}
                    <p className="text-center">Iniciar session</p>
                    <img 
                        className="w-[60px]" 
                            src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/64618a1be96ff28c75e09417_Rotate%20Icon.svg" 
                            alt="" />
                </article>

                <Form />
            </section>
        </Layout>
    )

}