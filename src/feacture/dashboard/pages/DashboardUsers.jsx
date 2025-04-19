import React, { useState } from "react";
import { Title } from "../../landing/components/Title";
import { DashboardUsersTable } from "../components/users/DashboardUsersTable";
import { DashboardUsersForm } from "../components/users/DashboardUsersForm";

export const DashboardUsers = () => {
  const [userToEdit, setUserToEdit] = useState(null);

  return (
    <section className="w-full p-[20px]">
      <Title title="dashboard/Users" />

      <section className="flex gap-[20px]">
        <div className="w-[25%]">
          <DashboardUsersForm
            userToEdit={userToEdit}
            setUserToEdit={setUserToEdit}
            getUsers={(refetch) => (DashboardUsersTable.refetch = refetch)}
          />
        </div>
        <DashboardUsersTable setUserToEdit={setUserToEdit} />
      </section>
    </section>
  );
};
