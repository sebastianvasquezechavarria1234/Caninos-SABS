import axios from "axios";
import React, { useEffect, useState } from "react";
import { IconCanino, IconDoc, IconUser, IconVerifyque } from "../../../../assets/icons/Icons";

export const DashboardUsersTable = () => {
     const [users, setUsers] = useState([])

     useEffect(() => {
         const peticionApi = () => {
             axios.get("http://localhost:3030/users/")
             .then((res) => {
                 console.log(res.data)
                 setUsers(res.data)
             })
         }
 
         peticionApi()
     },[])
    return(
        <section className="w-[75%]">
            <ul className="bg-white/20 grid gap-[5px] grid-cols-4 border-y border-dashed py-[10px]">
               <li>
                    <p className=" italic underline pl-[20px] border-x border-dashed">Email:</p>

               </li>
               <li>
                    <p className=" italic underline pl-[20px] border-r border-dashed">Compañía:</p>

               </li>
               <li>
                    <p className=" italic underline pl-[20px] border-r border-dashed">Rol:</p>

               </li>
               <li>
                    <p className=" italic underline pl-[20px] border-r border-dashed">Acciones</p>

               </li>
             
            </ul>

            {/* MAP */}
            {users.map((user) => (
               <ul className="grid gap-[5px] grid-cols-4 border-b border-dashed py-[10px]">
                    <li>
                         <p className=" pl-[20px] border-x border-dashed">{user.email}</p>

                    </li>
                    <li>
                         <p className=" pl-[20px] border-r border-dashed">{user.company.name}</p>

                    </li>
                    <li>
                         <p className="flex items-center gap-[5px] pl-[20px] border-r border-dashed">
                              {/* ICON VETERINARIO */}
                              {user.role.name === "Peluquero Canino" && (
                                   <span className="translate-y-[-2px]">
                                        <IconCanino />
                                   </span>
                              )}
                              {/* ICON VETERINARIO */}
                              {user.role.name === "Veterinario" && (
                                   <span className="translate-y-[-2px] text-[var(--purple)]">
                                        <IconDoc />
                                   </span>
                              )}
                              {/* ICON USER */}
                              {user.role.name === "Cliente" && (
                                   <span className="translate-y-[-2px] text-[#c69693]">
                                        <IconUser />
                                   </span>
                              )}
                              {/* ICON ADMIN */}
                              {user.role.name === "Administrador" && (
                                   <span className="translate-y-[-2px] text-blue-700">
                                        <IconVerifyque />

                                   </span>
                              )}

                              {/* NOMBRE DEL ROL USUARIO */}
                              {user.role.name}</p>

                    </li>
                    <li>
                         <p className=" pl-[20px] border-r border-dashed flex gap-[10px]">
                         {/* ICON */}
                         <span className="cursor-pointer pt-[1px] px-[7px] bg-blue-200">
                              Editar
                         </span>
                         {/* ICON */}
                         <span className="cursor-pointer pt-[1px] px-[7px] bg-red-200">
                              Eliminar
                         </span>
                         </p>

                    </li>
               
               </ul>

            ))}
        </section>
    )
}