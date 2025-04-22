"use client"

import { useEffect, useState } from "react"
import { Title } from "../../landing/components/Title"
import { DashboardRolesForm } from "../components/roles/DashboardRolesForm"
import { DashboardRolesTable } from "../components/roles/DashboardRolesTable"
import axios from "axios"

export const DashboardRoles = () => {
  const [roles, setRoles] = useState([])
  const [selectedRole, setSelectedRole] = useState(null)

  const fetchRoles = async () => {
    try {
      const res = await axios.get("http://localhost:3030/roles")
      setRoles(res.data)
    } catch (error) {
      console.error("Error al cargar roles:", error)
    }
  }

  useEffect(() => {
    fetchRoles()
  }, [])

  return (
    <section className="w-full p-[20px]">
      <Title title="dashboard/Roles" />
      <section className="flex gap-[20px]">
        <div className="w-[25%]">
          <DashboardRolesForm
            selectedRole={selectedRole}
            setSelectedRole={setSelectedRole}
            fetchRoles={fetchRoles}
          />
        </div>
        <DashboardRolesTable
          roles={roles}
          setSelectedRole={setSelectedRole}
          fetchRoles={fetchRoles}
        />
      </section>
    </section>
  )
}
