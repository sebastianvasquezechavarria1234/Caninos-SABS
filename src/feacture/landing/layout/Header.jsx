import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {

    const location = useLocation()

    return(
        <header className="fixed w-full p-[10px] z-50">
            <nav className="flex shadow-md justify-between items-center p-[10px] bg-white rounded-[8px] max-w-[var(--max-w)] mx-auto">
                <ul className="">
                    <Link className="block pl-[10px]" to="/">
                        <h4>Caninos SABS</h4>
                    </Link>
                </ul>
                <ul className="flex items-center gap-[20px]">
                    {/* HOME */}
                    <li>
                        <Link className="relative group" to="/">
                            Home
                            <span 
                                className={`
                                    opacity-0 w-full h-[3px] bg-[currentColor] block absolute left-0 bottom-[-25px] duration-200 group-hover:opacity-100
                                    ${location.pathname === "/" ? "opacity-100" : "opacity-0"}`}>
                            </span>
                        </Link>
                    </li>
                    {/* QUIENES SOMOS */}
                    <li>
                        <Link className="relative group" to="/quienes-somos">
                            Quienes somos
                            <span 
                                className={`
                                    opacity-0 w-full h-[3px] bg-[currentColor] block absolute left-0 bottom-[-25px] duration-200 group-hover:opacity-100
                                    ${location.pathname === "/quienes-somos" ? "opacity-100" : "opacity-0"}`}>
                            </span>
                        </Link>
                    </li>
                    {/* QUIENES SOMOS */}
                    <li>
                        <Link className="relative group" to="/products">
                            Productos
                            <span 
                                className={`
                                    opacity-0 w-full h-[3px] bg-[currentColor] block absolute left-0 bottom-[-25px] duration-200 group-hover:opacity-100
                                    ${location.pathname === "/products" ? "opacity-100" : "opacity-0"}`}>
                            </span>
                        </Link>
                    </li>
                    {/* SERVICIOS */}
                    <li>
                        <Link className="relative group" to="/services">
                            Servicios
                            <span 
                                className={`
                                    opacity-0 w-full h-[3px] bg-[currentColor] block absolute left-0 bottom-[-25px] duration-200 group-hover:opacity-100
                                    ${location.pathname === "/services" ? "opacity-100" : "opacity-0"}`}>
                            </span>
                        </Link>
                    </li>
                 
                </ul>
                    <ul>
                        <li>
                            <Link className="btn bg-[var(--green)] text-white" to="/login">Iniciar session</Link>
                        </li>
                    </ul>
            </nav>
        </header>
    )
}