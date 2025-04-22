"use client"

import { useState, useEffect } from "react"
import axios from "axios"

export const DashboardRolesForm = ({ selectedRole, setSelectedRole, fetchRoles }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  })

  useEffect(() => {
    if (selectedRole) {
      setFormData({
        name: selectedRole.name,
        description: selectedRole.description,
      })
    } else {
      setFormData({
        name: "",
        description: "",
      })
    }
  }, [selectedRole])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      if (selectedRole) {
        await axios.put(`http://localhost:3030/roles/${selectedRole.id}`, formData)
        alert("Rol actualizado con éxito.")
      } else {
        await axios.post("http://localhost:3030/roles", formData)
        alert("Rol registrado con éxito.")
      }

      setSelectedRole(null)
      setFormData({ name: "", description: "" })
      fetchRoles()
    } catch (error) {
      console.error("Error al registrar o actualizar el rol:", error)
      alert("Error al registrar o actualizar el rol.")
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full p-[20px] rounded-[20px] shadow-lg bg-white border border-black/10"
    >
      <h2 className="mb-[20px] text-center">Roles</h2>

      <label className="block mb-[15px]">
        <p className="translate-y-[16px] translate-x-[4px] px-[4px] bg-white inline-flex">Nombre:</p>
        <input
          className="w-full border border-black/10 rounded-[10px] bg-white p-[12px] outline-none shadow-md"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Por ejemplo: Administrador"
          minLength={3}
          required
        />
      </label>

      <label className="block">
        <p className="translate-y-[16px] translate-x-[4px] px-[4px] bg-white inline-flex">Descripción:</p>
        <textarea
          className="w-full border border-black/10 rounded-[10px] bg-white p-[12px] outline-none shadow-md min-h-[100px]"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe las funciones y permisos de este rol"
          required
        />
      </label>

      <input
        className="mt-[20px] btn bg-[var(--green)] cursor-pointer text-white w-full"
        type="submit"
        value={selectedRole ? "Actualizar Rol" : "Registrar Rol"}
      />
    </form>
  )
}
