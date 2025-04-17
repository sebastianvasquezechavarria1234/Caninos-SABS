import React from "react";
import { Title } from "../Title";

export const ImpactCard = ({number, title, subTitle}) => {
    return(
        <article>
            <h1 className="ImpactH1 border-b border-dashed pb-[20px] mb-[20px] font-bold flex items-end gap-[20px]">
                {number}
                <img 
                    className="w-[30px]" 
                    src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/64618a1be96ff28c75e09a52_arrow-up.svg" 
                    alt="" />
            </h1>
            <p>{title}</p>
            <p>{subTitle}</p>
        </article>
    )
}