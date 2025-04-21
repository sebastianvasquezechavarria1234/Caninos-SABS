"use client"

import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "./AuthContext"


export const AccesoDenegado = () => {
  const { logout } = useContext(AuthContext)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Acceso Denegado</h1>
        <p className="mb-6">Lo sentimos, no tienes permisos de administrador para acceder al dashboard.</p>
        <div className="flex flex-col space-y-3">
          <Link to="/" className="inline-block px-6 py-2 bg-[var(--green)] text-white rounded-md hover:opacity-90">
            Ir a la página principal
          </Link>
          <button
            onClick={logout}
            className="inline-block px-6 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  )
}
