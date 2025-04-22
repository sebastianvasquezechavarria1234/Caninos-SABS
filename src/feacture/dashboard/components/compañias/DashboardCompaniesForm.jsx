import { useState, useEffect } from "react";
import axios from "axios";

export const DashboardCompaniesForm = ({ selectedCompany, setSelectedCompany, fetchCompanies }) => {
  const [formData, setFormData] = useState({
    name: "",
    nit: "",
    phone: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    if (selectedCompany) {
      setFormData({
        name: selectedCompany.name,
        nit: selectedCompany.nit,
        phone: selectedCompany.phone,
        email: selectedCompany.email,
        address: selectedCompany.address,
      });
    } else {
      setFormData({
        name: "",
        nit: "",
        phone: "",
        email: "",
        address: "",
      });
    }
  }, [selectedCompany]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (selectedCompany) {
        await axios.put(`http://localhost:3030/companies/${selectedCompany.id}`, formData);
        alert("Compañía actualizada con éxito.");
      } else {
        await axios.post("http://localhost:3030/companies", formData);
        alert("Compañía registrada con éxito.");
      }

      // Limpiamos el formulario y la selección
      setSelectedCompany(null);
      setFormData({
        name: "",
        nit: "",
        phone: "",
        email: "",
        address: "",
      });
      
      // Actualizamos la lista de compañías sin recargar la página
      fetchCompanies();
      
    } catch (error) {
      alert("Error al registrar o actualizar la compañía.");
      console.error("Error detallado:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full p-[20px] rounded-[20px] shadow-lg bg-white border border-black/10"
    >
      {/* El resto del código del formulario permanece igual */}
      <h2 className="mb-[20px] text-center">Compañías</h2>

      <div className="flex gap-[10px]">
        <label className="block w-[50%] mb top-[20px]">
          <p className="translate-y-[16px] translate-x-[4px] px-[4px] bg-white inline-flex">Nombre:</p>
          <input
            className="w-full border border-black/10 rounded-[10px] bg-white p-[12px] outline-none shadow-md"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="por Ejemplo: compañia"
            minLength={3}
            required
          />
        </label>

        <label className="block w-[50%] mb top-[20px]">
          <p className="translate-y-[16px] translate-x-[4px] px-[4px] bg-white inline-flex">NIT:</p>
          <input
            className="w-full border border-black/10 rounded-[10px] bg-white p-[12px] outline-none shadow-md"
            type="text"
            name="nit"
            value={formData.nit}
            onChange={handleChange}
            placeholder="901234567-1"
            required
          />
        </label>
      </div>

      <div className="flex gap-[10px]">
        <label className="block w-[50%]">
          <p className="translate-y-[16px] translate-x-[4px] px-[4px] bg-white inline-flex">Teléfono:</p>
          <input
            className="w-full border border-black/10 rounded-[10px] bg-white p-[12px] outline-none shadow-md"
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="3015857443"
            required
          />
        </label>

        <label className="block w-[50%]">
          <p className="translate-y-[16px] translate-x-[4px] px-[4px] bg-white inline-flex">Email:</p>
          <input
            className="w-full border border-black/10 rounded-[10px] bg-white p-[12px] outline-none shadow-md"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Por ejem: compani@gmail.com"
            required
          />
        </label>
      </div>

      <label className="block">
        <p className="translate-y-[16px] translate-x-[4px] px-[4px] bg-white inline-flex">Dirección:</p>
        <input
          className="w-full border border-black/10 rounded-[10px] bg-white p-[12px] outline-none shadow-md"
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Por ejem: CALL 11 54-62"
          required
        />
      </label>

      <input
        className="mt-[20px] btn bg-[var(--green)] cursor-pointer text-white w-full"
        type="submit"
        value={selectedCompany ? "Actualizar Compañía" : "Registrar Compañía"}
      />
    </form>
  );
};