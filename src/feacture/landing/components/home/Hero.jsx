import React from "react";
import { Link } from "react-router-dom";
import { IconAroowRigth } from "../../../../assets/icons/Icons";
import HeroBg  from '/hero.webp'

export const Hero = () => {
    return (
        <section className="max-w-[900px] mx-auto text-center pt-[120px] max-xl:overflow-hidden">
            {/* TITLE */}
            <div className="">
                <h1 className="mb-[20px]">Comprometidos con el bienestar de quien siempre está a tu lado.</h1>
                <p className="mb-[20px]">En Caninos SABS nos dedicamos con pasión al bienestar de tu compañero de cuatro patas.
                    Desde productos especializados hasta servicios de calidad.</p>
                <Link
                    className="btn bg-[var(--green)] text-white"
                    to="">
                    Ver Productos
                    <IconAroowRigth />
                </Link>
                {/* PICTURE */}
                <picture className="relative flex justify-center mt-[50px]">
                    <img 
                        className="rounded-[10px] shadow-lg relative z-30 w-[70%]" 
                        src={HeroBg} 
                        alt="hero" />

                    {/* RAYA */}
                    <img 
                        className="right-[-20%] w-[40%] top-[10%] absolute" 
                        src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/64618a1be96ff28c75e09a22_squiggle-version-b.svg" 
                        alt="" />
                    {/* MALLA */}
                    <img 
                        className="right-[10%] w-[40%] bottom-[-10%] absolute" 
                        src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/64618a1be96ff28c75e09a4b_dot-matrix.svg" 
                        alt="" />
                    {/* CIRCLE */}
                    <img 
                        className="left-[-5%] w-[40%] top-[-30%] absolute" 
                        src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/64618a1be96ff28c75e09a2e_color-pie-chart.svg" 
                        alt="" />
                    {/* ICONS */}
                    <img 
                        className="right-[10%] w-[80px] top-[-5%] z-40 absolute"
                        src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/64618a1be96ff28c75e09a27_icon-enlarge.svg" 
                        alt="" />

                </picture>

            </div>

        </section>
    )
}