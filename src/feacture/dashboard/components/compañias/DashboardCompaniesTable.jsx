import axios from "axios";
import React, { useEffect, useState } from "react";

export const DashboardCompaniesTable = () => {

  const [companies, setCompanies] = useState([]);

  // Obtener las compañías desde la API
  useEffect(() => {
    const peticionApiCompanies = () => {
      axios.get("http://localhost:3030/companies/")
        .then((res) => {
          console.log(res.data);
          setCompanies(res.data);
        });
    };
    peticionApiCompanies();
  }, []);

  // Función para eliminar una compañía
  const handleDelete = async (companyId) => {
    try {
      const res = await axios.delete(`http://localhost:3030/companies/${companyId}`);
      console.log(res.data);
      // Actualizar la lista de compañías en el estado después de eliminar
      setCompanies(companies.filter(company => company._id !== companyId));
      alert("Compañía eliminada correctamente.");
    } catch (error) {
      console.error("Error al eliminar:", error.response?.data || error.message);
      alert("Error al eliminar compañía.");
    }
  };

  return (
    <section className="w-[75%]">
      <ul className="bg-white/20 grid gap-[5px] grid-cols-5 border-y border-dashed py-[10px]">
        <li>
          <p className="italic underline pl-[20px] border-x border-dashed">Nombre:</p>
        </li>
        <li>
          <p className="italic underline pl-[20px] border-r border-dashed">Teléfono:</p>
        </li>
        <li>
          <p className="italic underline pl-[20px] border-r border-dashed">Dirección:</p>
        </li>
        <li>
          <p className="italic underline pl-[20px] border-r border-dashed">Email:</p>
        </li>
        <li>
          <p className="italic underline pl-[20px] border-r border-dashed">Acciones</p>
        </li>
      </ul>

      {/* MAP */}
      {companies.map((company) => (
        <ul className="bg-white/20 grid gap-[5px] grid-cols-5 border-b border-dashed py-[10px]" key={company._id}>
          <li>
            <p className="pl-[20px] line-clamp-1 border-x border-dashed">{company.name}</p>
          </li>
          <li>
            <p className="pl-[20px] line-clamp-1 border-r border-dashed">{company.phone}</p>
          </li>
          <li>
            <p className="pl-[20px] line-clamp-1 border-r border-dashed">{company.address}</p>
          </li>
          <li>
            <p className="pl-[20px] line-clamp-1 border-r border-dashed">{company.email}</p>
          </li>
          <li>
            <p className="pl-[20px] border-r border-dashed flex gap-[10px]">
              {/* ICON EDITAR */}
              <span className="cursor-pointer pt-[1px] px-[7px] bg-blue-200">
                Editar
              </span>
              {/* ICON ELIMINAR */}
              <span 
                className="cursor-pointer pt-[1px] px-[7px] bg-red-200"
                onClick={() => handleDelete(company._id)} // Llamar a la función de eliminar
              >
                Eliminar
              </span>
            </p>
          </li>
        </ul>
      ))}
    </section>
  );
};
