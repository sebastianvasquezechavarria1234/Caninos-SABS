import React from "react";

export const SubFooter = () => {
    return(
        <footer className="subFooter w-full translate-y-[2px]">
            {/* CIRCLE PURPLE */}
            <img 
                className="w-[40%] top-[10%] absolute left-[50%] translate-x-[-50%] z-10]" 
                src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/64618a1be96ff28c75e093b8_moon.svg" 
                alt="banner" />
            {/* BLUE */}
            <img 
                className="w-full z-10 absolute top-[28%]" 
                src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/64618a1be96ff28c75e094db_mountain%20(1).svg" 
                alt="banner" />
            {/* CAFE */}
            <img 
                className="w-full relative z-30 translate-y-[30%]" 
                src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/64618a1be96ff28c75e093c9_layer-a-1.svg" 
                alt="banner" />
            {/* PUNTOS GREEN */}
            <img 
                className="absolute w-full z-20 top-[30%]" 
                src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/64618a1be96ff28c75e093b3_layer-b.svg" 
                alt="banner" />
            {/* ULTIMO GREEN */}
            <img 
                className="relative z-40 w-full" 
                src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/64618a1be96ff28c75e093e3_block-green.svg" 
                alt="banner" />
        </footer>
    )
}