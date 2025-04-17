import React from "react";
import { DashboardSideBar } from "./DashboardSideBard";
import { Outlet } from "react-router-dom";

export const DashboardLayout = () => {
  return (
    <main className="w-full h-screen flex">
      <DashboardSideBar />
      <section className="flex-1 overflow-auto">
        <Outlet /> {/* Esto renderiza la ruta hija (DashboardHome, etc.) */}
      </section>
    </main>
  );
};
