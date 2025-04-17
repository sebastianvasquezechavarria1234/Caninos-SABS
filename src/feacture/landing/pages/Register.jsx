import React from "react";
import { Layout } from '../layout/Layout'
import { Form } from "../components/login/Form";
import { Title } from "../components/Title";
import { Link } from "react-router-dom";

export const Register = () => {
    return (
        <Layout>
            <section className="pt-[120px] flex gap-[30px] max-w-[var(--max-w)] mx-auto px-[10px]">
                {/* LEFT */}
                <div className="w-[75%] flex gap-[20px] h-[400px]">
                    <picture className="relative w-[70%]  block ">
                        <img className="w-full h-full object-cover" src="https://www.dirtydogbeautyclub.com/cdn/shop/files/disco-dog-poodle_639x.jpg?v=1691787626" alt="" />

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



                {/*  */}
                <form className="relative w-[25%] p-[20px] rounded-[10px] shadow-lg bg-[#eef1ef]" action="">
                    {/* CIRCLE */}
                    <img className="absolute top-0 w-[60px] right-0" src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/64618a1be96ff28c75e09417_Rotate%20Icon.svg" alt="" />
                    <h2 className="mb-[20px]">Register</h2>
                    {/* NOMBRE */}
                    <label className=" block mb-[20px]">
                        <p>Nombre:</p>
                        <input
                            className="w-full bg-white p-[12px] outline-none rounded-[4px] shadow-md"
                            type="text"
                            placeholder="por Ejem:sebas"
                            minLength={6}
                            required />
                    </label>
                    {/* EMAIL */}
                    <label className=" block mb-[20px]">
                        <p>Email:</p>
                        <input
                            className="w-full bg-white p-[12px] outline-none rounded-[4px] shadow-md"
                            type="email"
                            placeholder="por Ejem:sebas@gamil.com"
                            minLength={6}
                            required />
                    </label>
                    {/* PASSWORD */}
                    <label className=" block mb-[20px]">
                        <p>Contraseña:</p>
                        <input
                            className="w-full bg-white p-[12px] outline-none rounded-[4px] shadow-md"
                            type="email"
                            placeholder="por Ejem:sebas12345"
                            minLength={3}
                            required />
                    </label>
                    <Link to="/login">Login</Link>

                    {/* SUBMIT */}
                    <input className="btn bg-[var(--green)] cursor-pointer text-white w-full" type="submit" value="Iniciar session" />


                </form>
            </section>
        </Layout>
    )

}