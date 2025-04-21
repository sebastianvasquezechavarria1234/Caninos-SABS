import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="bg-[var(--green)] text-[var(--blue)]">
            <section className="max-w-[var(--max-w)] mx-auto px-[10px]">
                {/* SIGUENOS EN: */}
                <ul className="mb-[20px] flex gap-[20px] items-center max-lg:justify-center">
                    <p>Síguenos en:</p>
                    <a href="">
                        <img className="w-[20px] max-md:w-[15px]" src="https://violet-sand.vercel.app/img/footer__icon__1.svg" alt="icon" />
                    </a>
                    <a href="">
                        <img className="w-[20px] max-md:w-[15px]" src="https://violet-sand.vercel.app/img/footer__icon__2.svg" alt="icon" />
                    </a>
                    <a href="">
                        <img className="w-[20px] max-md:w-[15px]" src="https://violet-sand.vercel.app/img/footer__icon__3.svg" alt="icon" />
                    </a>
                </ul>

                <nav className="flex justify-between items-center gap-[20px] border-t border-dashed py-[20px] max-lg:flex-col max-lg:items-star">
                    <ul>
                        <Link className="" to="/">
                            <h4>Caninos SABS</h4>
                        </Link>
                    </ul>
                    <ul className="flex gap-[20px] items-center">
                        <Link to="/">
                            Home
                        </Link>
                        <Link to="/quienes-somos">
                            Quines somos
                        </Link>
                        <Link to="/products">
                            Productos
                        </Link>
                        <Link to="/categorias">
                            Categorias
                        </Link>
                    </ul>
                    <Link className="btn border" to="/login">
                        Iniciar session
                    </Link>
                </nav>
            </section>
        </footer>
    )
}