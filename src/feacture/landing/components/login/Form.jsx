import React from "react";

export const Form = () => {
    return(
        <form className="relative w-[25%] p-[20px] rounded-[10px] shadow-lg bg-[#eef1ef]" action="">
            {/* CIRCLE */}
            <img className="absolute top-0 w-[60px] right-0" src="https://cdn.prod.website-files.com/64618a1be96ff28c75e090c5/64618a1be96ff28c75e09417_Rotate%20Icon.svg" alt="" />
            <h2 className="mb-[20px]">Iniciar session</h2>
            {/* EMAIL */}
            <label className=" block mb-[20px]">
                <p>Email:</p>
                <input 
                    className="w-full bg-white p-[12px] outline-none rounded-[4px] shadow-md" 
                    type="email" 
                    placeholder="por Ejem:sebas@gamil.com" 
                    minLength={6} 
                    required />
            </label>
            {/* EMAIL */}
            <label className=" block mb-[20px]">
                <p>Contraseña:</p>
                <input 
                    className="w-full bg-white p-[12px] outline-none rounded-[4px] shadow-md" 
                    type="email" 
                    placeholder="por Ejem:sebas12345" 
                    minLength={3} 
                    required />
            </label>

            {/* SUBMIT */}
            <input className="btn bg-[var(--green)] cursor-pointer text-white w-full" type="submit" value="Iniciar session" />

     
        </form>
    )
}