import React from "react";
import { Link } from "react-router-dom";

export const DashboardCard = ({ to, svg, title, text }) => {
    return (
        <Link 
            to={to} 
            className="border-t border-dashed pt-[40px] "
        >
            <img 
                className="w-[60px] mb-[10px]" 
                src={svg} 
                alt="Icono de usuarios" 
            />
            <h4 className="text-xl font-semibold text-gray-800">{title}</h4>
            <p className="text-sm text-gray-600 mt-[8px]">
                {text}
            </p>
        </Link>
    );
};
