import React from "react";

export const Title = ({title}) => {
    return(
        <p className="w-full py-[20px] border-t border-dashed border-[currentColor] flex justify-between items-center uppercase mb-[20px]">
            <span className="flex gap-[10px] items-center">
                <img 
                    className="w-[15px]" 
                    src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/646201e94d30162b2569b6a7_moving-circles-animation.svg" 
                    alt="" />
                {title}
            </span>
            <span className="w-[10px] h-[10px] block rounded-full bg-[currentColor]"></span>
        </p>
    )
}