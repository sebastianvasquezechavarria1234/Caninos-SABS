import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {

    const location = useLocation()

    return(
        <header className="fixed w-full p-[10px] z-50">
            <nav className="flex shadow-md justify-between items-center px-[10px] bg-white rounded-[8px] max-w-[var(--max-w)] mx-auto">
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
                    {/* CATEGORIAS */}
                    <li>
                        <p className="cursor-pointer header__categoria--btn--hover py-[20px] relative group">
                            Categorias
                            

                            {/* SECTION CATEGORY OVERLINE */}
                            <div className="header__categoria--ctn bg-white p-[20px] absolute top-[100%] left-[0%] w-[400px] rounded-[10px] shadow-md">
                                <ul>
                                    {/* 1 CARD */}
                                    <Link to="/categorias/alimentos" className="header__categoria--link flex gap-[10px] border-b border-dashed py-[10px]">
                                        {/* PICTURE */}
                                        <picture className="rounded-[10px] shadow-md w-[60px] h-[60px] flex justify-center items-center bg-[#dacc84]">
                                            <img 
                                                className="w-[50%]" 
                                                src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/646201e94d30162b2569b6a7_moving-circles-animation.svg" 
                                                alt="" />
                                        </picture>
                                        {/* TEXT */}
                                        <div className="w-[65%]">
                                            <h5>Alimentos</h5>
                                            <p className="line-clamp-1">Comida seca y húmeda para perros</p>
                                        </div>
                                    </Link>
                                    {/* 2 CARD */}
                                    <Link to="/categorias/juguetes" className="header__categoria--link flex gap-[10px] border-b border-dashed py-[10px]">
                                        {/* PICTURE */}
                                        <picture className="rounded-[10px] shadow-md w-[60px] h-[60px] flex justify-center items-center bg-[var(--green)]">
                                            <img 
                                                className="w-[50%]" 
                                                src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/6531c474f2b3eec77bc54773_svg.svg" 
                                                alt="" />
                                        </picture>
                                        {/* TEXT */}
                                        <div className="w-[65%]">
                                            <h5>Juguetes</h5>
                                            <p className="line-clamp-1">Juguetes interactivos y resistentes</p>
                                        </div>
                                    </Link>
                                    {/* 3 CARD */}
                                    <Link to="/categorias/accesorios" className="header__categoria--link flex gap-[10px] border-b border-dashed py-[10px]">
                                        {/* PICTURE */}
                                        <picture className="rounded-[10px] shadow-md w-[60px] h-[60px] flex justify-center items-center bg-[#96c9e9]">
                                            <img 
                                                className="w-[50%]" 
                                                src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/6462231c11bbcbfdd7d1e492_team.svg" 
                                                alt="" />
                                        </picture>
                                        {/* TEXT */}
                                        <div className="w-[65%]">
                                            <h5>Accesorios</h5>
                                            <p className="line-clamp-1">Collares, correas y más</p>
                                        </div>
                                    </Link>
                                    {/* 4 CARD */}
                                    <Link to="/categorias/higiene" className="header__categoria--link flex gap-[10px]  py-[10px]">
                                        {/* PICTURE */}
                                        <picture className="rounded-[10px] shadow-md w-[60px] h-[60px] flex justify-center items-center bg-[#c69693]">
                                            <img 
                                                className="w-[50%]" 
                                                src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/6462230cf8fe494f03fdccfc_mission.svg" 
                                                alt="" />
                                        </picture>
                                        {/* TEXT */}
                                        <div className="w-[65%]">
                                            <h5>Higiene</h5>
                                            <p className="line-clamp-1">Shampoo, cepillos, limpieza</p>
                                        </div>
                                    </Link>
                                </ul>
                            </div>
                        </p>
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