

// Importamos React y los hooks que necesitamos
import { useState, useEffect } from "react"
// Importamos axios para hacer peticiones HTTP
import axios from "axios"

// Creamos el componente del formulario
export const DashboardCompaniesForm = ({ selectedCompany, setSelectedCompany, setCompanies }) => {
  // PASO 1: Creamos el estado para los datos del formulario
  const [formData, setFormData] = useState({
    name: "", // Nombre de la compañía
    nit: "", // NIT de la compañía
    phone: "", // Teléfono de la compañía
    email: "", // Email de la compañía
    address: "", // Dirección de la compañía
  })

  // PASO 2: Si estamos editando una compañía, cargamos sus datos en el formulario
  useEffect(() => {
    // Si hay una compañía seleccionada (modo edición)
    if (selectedCompany) {
      // Copiamos los datos de la compañía al formulario
      setFormData({
        name: selectedCompany.name,
        nit: selectedCompany.nit,
        phone: selectedCompany.phone,
        email: selectedCompany.email,
        address: selectedCompany.address,
      })
    }
  }, [selectedCompany]) // Este efecto se ejecuta cuando cambia selectedCompany

  // PASO 3: Función para manejar cambios en los campos del formulario
  const handleChange = (e) => {
    // Obtenemos el nombre del campo y su nuevo valor
    const { name, value } = e.target

    // Actualizamos el estado del formulario
    setFormData({
      ...formData, // Mantenemos los valores actuales
      [name]: value, // Actualizamos solo el campo que cambió
    })
  }

  // PASO 4: Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    // Evitamos que la página se recargue
    e.preventDefault()

    try {
      // CASO 1: Si estamos editando una compañía existente
      if (selectedCompany) {
        // Hacemos una petición PUT para actualizar la compañía
        const respuesta = await axios.put(`http://localhost:3030/companies/${selectedCompany.id}`, formData)

        // Limpiamos la selección
        setSelectedCompany(null)

        // Mostramos mensaje de éxito
        alert("Compañía actualizada con éxito.")

        // Actualizamos la lista de compañías
        setCompanies((prevCompanies) =>
          prevCompanies.map((company) => (company.id === respuesta.data.id ? respuesta.data : company)),
        )

        // Recargamos la página para ver los cambios
        window.location.reload()
      }
      // CASO 2: Si estamos creando una nueva compañía
      else {
        // Hacemos una petición POST para crear la compañía
        const respuesta = await axios.post("http://localhost:3030/companies", formData)

        // Mostramos mensaje de éxito
        alert("Compañía registrada con éxito.")

        // Añadimos la nueva compañía a la lista
        setCompanies((prevCompanies) => [...prevCompanies, respuesta.data])

        // Recargamos la página para ver los cambios
        window.location.reload()
      }
    } catch (error) {
      // Si hay un error, mostramos un mensaje
      alert("Error al registrar o actualizar la compañía.")
      console.error("Error detallado:", error)
    }
  }

  // PASO 5: Renderizamos el formulario
  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full p-[20px] rounded-[20px] shadow-lg bg-white border border-black/10"
    >
      {/* Título del formulario */}
      <h2 className="mb-[20px] text-center">Compañías</h2>

      {/* Primera fila: Nombre y NIT */}
      <div className="flex gap-[10px]">
        {/* Campo: Nombre */}
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

        {/* Campo: NIT */}
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

      {/* Segunda fila: Teléfono y Email */}
      <div className="flex gap-[10px]">
        {/* Campo: Teléfono */}
        <label className="block w-[50%]">
          <p className="translate-y-[16px] translate-x-[4px] px-[4px] bg-white inline-flex">Teléfono:</p>
          <input
            className="w-full border border-black/10 rounded-[10px] bg-white p-[12px] outline-none shadow-md"
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="3015857443"
          />
        </label>

        {/* Campo: Email */}
        <label className="block w-[50%]">
          <p className="translate-y-[16px] translate-x-[4px] px-[4px] bg-white inline-flex">Email:</p>
          <input
            className="w-full border border-black/10 rounded-[10px] bg-white p-[12px] outline-none shadow-md"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Por ejem: compani@gmail.com"
          />
        </label>
      </div>

      {/* Campo: Dirección */}
      <label className="block">
        <p className="translate-y-[16px] translate-x-[4px] px-[4px] bg-white inline-flex">Dirección:</p>
        <input
          className="w-full border border-black/10 rounded-[10px] bg-white p-[12px] outline-none shadow-md"
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Por ejem: CALL 11 54-62"
        />
      </label>

      {/* Botón de envío */}
      <input
        className="mt-[20px] btn bg-[var(--green)] cursor-pointer text-white w-full"
        type="submit"
        value={selectedCompany ? "Actualizar Compañía" : "Registrar Compañía"}
      />
    </form>
  )
}
