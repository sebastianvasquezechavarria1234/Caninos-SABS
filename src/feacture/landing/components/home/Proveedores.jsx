import React from "react";
import { Title } from "../Title";
import { Link } from "react-router-dom";

export const Proveedores = () => {
    return (
        <section className="mt-[120px] max-w-[var(--max-w)] mx-auto px-[10px] max-md:mt-[60px]">
            {/* TOP TEXT */}
            <div className="flex justify-between items-center mb-[20px]">
                <p className="uppercase flex gap-[10px] items-center">
                    <img
                        className="w-[15px]"
                        src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/646201e94d30162b2569b6a7_moving-circles-animation.svg"
                        alt="" />
                    patrocinadores
                </p>

                <Link className="btn border shadow-md" to="quienes-somos">Quienes somos</Link>

            </div>
            {/* GRID */}
            <ul className=" grid grid-cols-7 gap-[100px] py-[20px] border-y border-dashed max-md:gap-[20px] max-md:py-[0px]">
                <span className="flex justify-center items-center h-[50px]">
                    <img className="w-full h-full" src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/64618a1be96ff28c75e09997_Northwell.svg" alt="proveedores" />
                </span>
                <span className="flex justify-center items-center h-[50px]">
                    <img className="w-full h-full" src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/64618a1be96ff28c75e09a48_logo-galileo.svg" alt="proveedores" />

                </span>
                <span className="flex justify-center items-center h-[50px]">

                    <img className="w-full h-full" src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/64618a1be96ff28c75e09a21_maven-logo.svg" alt="proveedores" />
                </span>

                <span className="flex justify-center items-center h-[50px]">

                    <img className="w-full h-full" src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/65e0aa8076b960f3073f584c_rocky-mountain.svg" alt="proveedores" />
                </span>
                <span className="flex justify-center items-center h-[50px]">

                    <img className="w-full h-full" src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/64618a1be96ff28c75e09a44_octave-logo.svg" alt="proveedores" />
                </span>
                <span className="flex justify-center items-center h-[50px]">

                    <img className="w-full h-full" src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/64618a1be96ff28c75e09a40_logo-headway.svg" />
                </span>
                <span className="flex justify-center items-center h-[50px]">

                    <img className="w-full " src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/66fd51c91d841f08f76eef20_ucare.png" />
                </span>
            </ul>
        </section>
    )
}