# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


import React from "react";
import { Link } from "react-router-dom";

export const Form = () => {
    return(
        <form className="relative w-[350px] p-[20px] rounded-[20px] shadow-lg bg-white border border-black/10" action="">
            
            <h2 className="mb-[20px] text-center">Iniciar session</h2>
            {/* EMAIL */}
            <label className="block mb top-[20px]">
                <p className="translate-y-[16px] translate-x-[4px] px-[4px] bg-white inline-flex">Email:</p>
                <input 
                    className="w-full border border-black/10 rounded-[10px] bg-white p-[12px] outline-none rounded-[4px] shadow-md" 
                    type="email" 
                    placeholder="por Ejem:sebas@gamil.com" 
                    minLength={6} 
                    required />
            </label>
            
            {/* EMAIL */}
            <label className="block">
                <p className="translate-y-[16px] translate-x-[4px] px-[4px] bg-white inline-flex">Contraseña:</p>
                <input 
                    className="w-full border border-black/10 rounded-[10px] bg-white p-[12px] outline-none rounded-[4px] shadow-md" 
                    type="password" 
                    placeholder="por Ejem:sebas12345" 
                    minLength={3} 
                    required />
            </label>
            <Link className="my-[15px] inline-block underline" to="/register">register</Link>

            {/* SUBMIT */}
            <input className="btn bg-[var(--green)] cursor-pointer text-white w-full" type="submit" value="Iniciar session" />

     
        </form>
    )
}