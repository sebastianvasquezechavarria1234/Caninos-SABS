"use client"

import { useState } from "react"
import { Title } from "../../landing/components/Title"
import { DashboardRolesForm } from "../components/roles/DashboardRolesForm"
import { DashboardRolesTable } from "../components/roles/DashboardRolesTable"

export const DashboardRoles = () => {
  const [roles, setRoles] = useState([])
  const [selectedRole, setSelectedRole] = useState(null)

  return (
    <section className="w-full p-[20px]">
      <Title title="dashboard/Roles" />

      <section className="flex gap-[20px]">
        <div className="w-[25%]">
          <DashboardRolesForm
            selectedRole={selectedRole}
            setSelectedRole={setSelectedRole}
            setRoles={setRoles} // Pasamos la función setRoles
          />
        </div>
        <DashboardRolesTable roles={roles} setSelectedRole={setSelectedRole} />
      </section>
    </section>
  )
}
