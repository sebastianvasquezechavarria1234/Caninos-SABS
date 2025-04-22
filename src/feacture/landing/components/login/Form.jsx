import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../pages/AuthContext";
import axios from "axios";

export const Form = () => {

    // 
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    // use navagte
    const navegation = useNavigate()

    const { login } = useContext(AuthContext)
    
    // PETICION API
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response  = await axios.post("http://localhost:3030/login/",{email, password})
            const token = response.data.token
            login(token)
            navegation("/dashboard/home")
        } catch (error) {
            console.log("eror al inicioar smepknbípugl", error)
            setError("Datos incorrecto. intenta de nuevo")       
        }
    }

    return(
        <form onSubmit={handleSubmit} className="relative w-[350px] p-[20px] rounded-[20px] shadow-lg bg-white border border-black/10" action="">
            
            <h2 className="mb-[20px] text-center">Iniciar session</h2>
            {/* EMAIL */}
            <label className="block mb top-[20px]">
                <p className="translate-y-[16px] translate-x-[4px] px-[4px] bg-white inline-flex">Email:</p>
                <input 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border border-black/10 rounded-[10px] bg-white p-[12px] outline-none rounded-[4px] shadow-md" 
                    type="password" 
                    placeholder="por Ejem:sebas12345" 
                    minLength={3} 
                    required />
            </label>
            {error && <span className="text-red-600 block mt-[20px]">{error}</span>}
            {/* SUBMIT */}
            <input className="mt-[20px] btn bg-[var(--green)] cursor-pointer text-white w-full" type="submit" value="Iniciar session" />

     
        </form>
    )
}