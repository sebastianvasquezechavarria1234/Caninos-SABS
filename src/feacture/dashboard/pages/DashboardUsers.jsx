import React, { useState, useEffect } from "react";
import axios from "axios";
import { Title } from "../../landing/components/Title";
import { DashboardUsersTable } from "../components/users/DashboardUsersTable";
import { DashboardUsersForm } from "../components/users/DashboardUsersForm";

export const DashboardUsers = () => {
  const [users, setUsers] = useState([]);
  const [userToEdit, setUserToEdit] = useState(null);

  // Función para obtener los usuarios del servidor
  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3030/users/");
      setUsers(res.data);
    } catch (error) {
      console.error("Error al cargar usuarios:", error);
    }
  };

  // Cargar usuarios al montar el componente
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <section className="w-full p-[20px]">
      <Title title="dashboard/Users" />

      <section className="flex gap-[20px]">
        <div className="w-[25%]">
          <DashboardUsersForm
            userToEdit={userToEdit}
            setUserToEdit={setUserToEdit}
            fetchUsers={fetchUsers}
          />
        </div>
        <DashboardUsersTable 
          users={users} 
          setUserToEdit={setUserToEdit} 
          fetchUsers={fetchUsers} 
        />
      </section>
    </section>
  );
};