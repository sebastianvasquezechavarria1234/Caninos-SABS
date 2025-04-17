import React from "react";
import { Link } from "react-router-dom";


export const Hero = ({title, text, link, to, img, titleTop}) => {
    return (
        <section className="max-w-[900px] mx-auto text-center pt-[120px] max-xl:overflow-hidden">
            {/* TITLE TOP */}
            <div className="flex justify-center mb-[40px] items-center gap-[10px]">
                <img 
                    src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/646201e94d30162b2569b6a7_moving-circles-animation.svg" 
                    alt="icons" 
                    className="w-[15px] translate-y-[-3px]" />
                <p className="italic underline">{titleTop}</p>
            </div>
            {/* TITLE */}
            <div className="">
                <h1 className="mb-[20px]">{title}</h1>
                <p className="mb-[20px]">{text}</p>
                <Link
                    className="btn bg-[var(--green)] text-white"
                    to="/login">
                    Iniciar session
                </Link>
                {/* PICTURE */}
                <picture className="relative flex justify-center mt-[50px]">
                    <div className="w-[70%] h-[20vw] block max-md:h-[45vw]">
                        <img 
                            className="shadow-lg relative z-30 w-full h-full object-cover object-center" 
                            src={img} 
                            alt="hero" />

                    </div>

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