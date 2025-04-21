import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {

    const location = useLocation()

    return(
        <header className="fixed w-full p-[10px] z-50 max-md:p-0">
            <nav className="flex shadow-md justify-between items-center px-[10px] bg-white rounded-[8px] max-w-[var(--max-w)] mx-auto py-[10px] max-md:rounded-[0px]">
                <ul className="">
                    <Link className="block pl-[10px] max-md:pl-[0px]" to="/">
                        <h4 className="max-md:!text-[10px]">Caninos SABS</h4>
                    </Link>
                </ul>
                <ul className="flex items-center gap-[20px] max-md:gap-[10px]">
                    {/* HOME */}
                    <li>
                        <Link className="relative group max-md:!text-[8px]" to="/">
                            Home
                            <span 
                                className={`
                                    opacity-0 w-full h-[3px] bg-[currentColor] block absolute left-0 bottom-[-25px] duration-200 group-hover:opacity-100 max-md:bottom-[-15px] max-md:h-[2px]
                                    ${location.pathname === "/" ? "opacity-100" : "opacity-0"}`}>
                            </span>
                        </Link>
                    </li>
                    {/* QUIENES SOMOS */}
                    <li>
                        <Link className="relative group max-md:!text-[8px]" to="/quienes-somos">
                            Quienes somos
                            <span 
                                className={`
                                    opacity-0 w-full h-[3px] bg-[currentColor] block absolute left-0 bottom-[-25px] duration-200 group-hover:opacity-100 max-md:bottom-[-15px] max-md:h-[2px]
                                    ${location.pathname === "/quienes-somos" ? "opacity-100" : "opacity-0"}`}>
                            </span>
                        </Link>
                    </li>
                    {/* PRODUCTS */}
                    <li>
                        <Link className="relative group max-md:!text-[8px]" to="/products">
                            Productos
                            <span 
                                className={`
                                    opacity-0 w-full h-[3px] bg-[currentColor] block absolute left-0 bottom-[-25px] duration-200 group-hover:opacity-100 max-md:bottom-[-15px] max-md:h-[2px]
                                    ${location.pathname === "/products" ? "opacity-100" : "opacity-0"}`}>
                            </span>
                        </Link>
                    </li>
                    {/* CTEGORIES */}
                    <li>
                        <Link className="relative group max-md:!text-[8px]" to="/categorias">
                            Categorias
                            <span 
                                className={`
                                    opacity-0 w-full h-[3px] bg-[currentColor] block absolute left-0 bottom-[-25px] duration-200 group-hover:opacity-100 max-md:bottom-[-15px] max-md:h-[2px]
                                    ${location.pathname === "/categorias" ? "opacity-100" : "opacity-0"}`}>
                            </span>
                        </Link>
                    </li>
                  
                 
                </ul>
                <ul>
                    <li>
                        <Link className="max-md:!text-[8px] max-md:!pt-[3px] max-md:!px-[8px] max-md:!rounded-[3px] btn bg-[var(--green)] text-white" to="/login">Iniciar session</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}