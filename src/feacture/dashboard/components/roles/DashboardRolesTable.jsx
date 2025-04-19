"use client"

import axios from "axios"
import { useEffect, useState } from "react"

export const DashboardRolesTable = ({ setSelectedRole }) => {
  const [roles, setRolesLocal] = useState([])
  // Estado para controlar qué rol estamos viendo
  const [roleToView, setRoleToView] = useState(null)
  // Estado para controlar si el modal está visible
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    fetchRoles()
  }, [])

  const fetchRoles = () => {
    axios
      .get("http://localhost:3030/roles")
      .then((res) => {
        setRolesLocal(res.data)
      })
      .catch((error) => {
        console.error("Error al cargar roles:", error)
        alert("Error al cargar los roles")
      })
  }

  const handleDelete = async (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este rol? Esta acción no se puede deshacer.")) {
      try {
        await axios.delete(`http://localhost:3030/roles/${id}`)

        // Actualizamos el estado local
        setRolesLocal(roles.filter((role) => role.id !== id))
        alert("Rol eliminado con éxito.")
      } catch (error) {
        console.error("Error al eliminar el rol:", error)
        alert("Error al eliminar el rol.")
      }
    }
  }

  // Función para manejar el clic en el botón "Ver"
  const handleView = (role) => {
    setRoleToView(role) // Guardamos el rol que queremos ver
    setShowModal(true) // Mostramos el modal
  }

  // Función para cerrar el modal
  const closeModal = () => {
    setShowModal(false)
    setRoleToView(null)
  }

  return (
    <section className="w-[75%]">
      <ul className="bg-white/20 grid gap-[5px] grid-cols-3 border-y border-dashed py-[10px]">
        <li>
          <p className="italic underline pl-[20px] border-x border-dashed">Nombre:</p>
        </li>
        <li>
          <p className="italic underline pl-[20px] border-r border-dashed">Descripción:</p>
        </li>
        <li>
          <p className="italic underline pl-[20px] border-r border-dashed">Acciones</p>
        </li>
      </ul>

      {roles.map((role) => (
        <ul className="grid gap-[5px] grid-cols-3 border-b border-dashed py-[10px]" key={role._id || role.id}>
          <li>
            <p className="pl-[20px] line-clamp-1 border-x border-dashed">{role.name}</p>
          </li>
          <li>
            <p className="pl-[20px] line-clamp-2 border-r border-dashed">{role.description}</p>
          </li>
          <li>
            <p className="pl-[20px] border-r border-dashed flex gap-[10px]">
              {/* Añadimos el onClick al botón Ver */}
              <span className="cursor-pointer pt-[1px] px-[7px] bg-green-200" onClick={() => handleView(role)}>
                Ver
              </span>
              <span  className="cursor-pointer pt-[1px] px-[7px] bg-blue-200" onClick={() => setSelectedRole(role)}>
                Editar
              </span>
              <span
                className="cursor-pointer pt-[1px] px-[7px] bg-red-200"
                onClick={() => handleDelete(role.id || role._id)}
              >
                Eliminar
              </span>
            </p>
          </li>
        </ul>
      ))}

      {/* Modal simple para ver los detalles del rol */}
      {showModal && roleToView && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-[20px] p-[20px] max-w-[450px] w-full relative">
            {/* Título del modal */}
            <h2 className="mb-[15px] text-center">Detalles del Rol</h2>

            {/* Contenido del modal */}
            <div className="space-y-[10px]">
              <div className="bg-white shadow-md border border-black/10 p-[13px] rounded-[10px] flex items-center gap-[10px]">
                <p className="">Nombre:</p>
                <p>{roleToView.name}</p>
              </div>

              <div className="bg-white shadow-md border border-black/10 p-[13px] rounded-[10px]">
                <p className="mb-[5px]">Descripción:</p>
                <p className="text-sm">{roleToView.description || "Sin descripción"}</p>
              </div>
            </div>

            {/* Botón para cerrar */}
            <button
              onClick={closeModal}
              className="mt-[15px] btn bg-[var(--green)] text-white w-full flex items-center justify-center cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
