import React from "react";
import { Link } from "react-router-dom";
import { Title } from "../../landing/components/Title";

export const DashboardSideBar = () => {
    return(
        <section className="p-[20px] w-[20%] h-full bg-[var(--green)] text-[var(--blue)]">

            {/* NAVEGATION */}
            <nav className="flex flex-col justify-between h-full">
                <ul className="">
                    <Title title="Dashboard"/>
                    {/*  */}
                    <li>
                        <Link 
                            className="border-t border-dashed pt-[10px] pb-[7px] w-full flex items-center gap-[10px] text-[20px]!" 
                            to="/dashboard/home">
                                <img 
                                    className="w-[18px] translate-y-[-3px]" 
                                    src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/65ae6f072b9574a8e169f4cb_1.svg" 
                                    alt="icons" />
                                Home
                            </Link>
                    </li>
                    {/*  */}
                    <li>
                        <Link 
                            className="border-t border-dashed pt-[10px] pb-[7px] w-full flex items-center gap-[10px] text-[20px]!" 
                            to="/dashboard/users">
                                <img 
                                    className="w-[18px] translate-y-[-3px]" 
                                    src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/65ae6f0fb68c86b45e1f7a21_3.svg" 
                                    alt="icons" />
                                Usuarios
                            </Link>
                    </li>
                    {/*  */}
                    <li>
                        <Link 
                            className="border-t border-dashed pt-[10px] pb-[7px] w-full flex items-center gap-[10px] text-[20px]!" 
                            to="/dashboard/roles">
                                <img 
                                    className="w-[18px] translate-y-[-3px]" 
                                    src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/65ae6f06ca4e4a4adefa1add_2.svg" 
                                    alt="icons" />
                                Roles
                            </Link>
                    </li>
                    {/*  */}
                    <li>
                        <Link 
                            className="border-t border-dashed pt-[10px] pb-[7px] w-full flex items-center gap-[10px] text-[20px]!" 
                            to="/dashboard/compañia">
                                <img 
                                    className="w-[18px] translate-y-[-3px]"  
                                    src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090ea/64618a1be96ff28c75e09b72_icon3.svg"
                                    alt="icons" />
                                Compañías
                            </Link>
                    </li>
                    {/*  */}
                    <li>
                        <Link 
                            className="border-y border-dashed pt-[10px] pb-[7px] w-full flex items-center gap-[10px] text-[20px]!" 
                            to="/dashboard/products">
                                <img 
                                    className="w-[18px] translate-y-[-3px]" 
                                    src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090ea/64618a1be96ff28c75e09aff_62cac080bd099a224af00c96_graphic-c.svg" 
                                    alt="icons" />
                                Productos
                            </Link>
                    </li>
                    {/*  */}
                    <li>
                        <Link 
                            className="border-b border-dashed pt-[10px] pb-[7px] w-full flex items-center gap-[10px] text-[20px]!" 
                            to="/dashboard/categorias">
                                <img 
                                    className="w-[18px] translate-y-[-3px]" 
                                    src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/65ae6f072b9574a8e169f4cb_1.svg" 
                                    alt="icons" />
                                Categorías
                            </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link className="btn border">Cerrar session</Link>
                    </li>
                </ul>
            </nav>

        </section>
    )
}