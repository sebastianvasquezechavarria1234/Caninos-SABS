import React from "react";

export const CardSlider = ({img, svg}) => {
    return(
        <picture className="relative w-[33vw] h-[23vw] block rounded-[8px] overflow-hidden max-md:w-[300px] max-md:h-[300px]">
            {/* SVG */}
            <img 
                className="w-[50px] absolute bottom-[20px] left-[20px]" 
                src={svg} 
                alt="" />
            {/* IMG */}
            <img 
                className="w-full h-full object-cover object-center" 
                src={img} 
                alt="slider" />
        </picture>
    )
}