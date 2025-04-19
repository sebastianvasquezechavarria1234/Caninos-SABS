import axios from "axios"
import { useEffect, useState } from "react"

export const DashboardCompaniesTable = ({ setSelectedCompany }) => {
  const [companies, setCompaniesLocal] = useState([])
  // Estado para controlar qué compañía estamos viendo
  const [companyToView, setCompanyToView] = useState(null)
  // Estado para controlar si el modal está visible
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    fetchCompanies()
  }, [])

  const fetchCompanies = () => {
    axios.get("http://localhost:3030/companies/").then((res) => {
      setCompaniesLocal(res.data)
    })
  }

  const handleDelete = async (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar esta compañía? Esta acción no se puede deshacer.")) {
      try {
        await axios.delete(`http://localhost:3030/companies/${id}`)

        // Solo actualizamos el estado local
        setCompaniesLocal(companies.filter((company) => company.id !== id))
        alert("Compañía eliminada con éxito.")
      } catch (error) {
        console.error("Error al eliminar la compañía:", error)
        alert("Error al eliminar la compañía.")
      }
    }
  }

  // Función para manejar el clic en el botón "Ver"
  const handleView = (company) => {
    setCompanyToView(company) // Guardamos la compañía que queremos ver
    setShowModal(true) // Mostramos el modal
  }

  // Función para cerrar el modal
  const closeModal = () => {
    setShowModal(false)
    setCompanyToView(null)
  }

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

      {companies.map((company) => (
        <ul className="grid gap-[5px] grid-cols-5 border-b border-dashed py-[10px]" key={company._id || company.id}>
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
              {/* Añadimos el onClick al botón Ver */}
              <span className="cursor-pointer pt-[1px] px-[7px] bg-green-200" onClick={() => handleView(company)}>
                Ver
              </span>
              <span
                className="cursor-pointer pt-[1px] px-[7px] bg-blue-200"
                onClick={() => setSelectedCompany(company)}
              >
                Editar
              </span>
              <span
                className="cursor-pointer pt-[1px] px-[7px] bg-red-200"
                onClick={() => handleDelete(company.id || company._id)}
              >
                Eliminar
              </span>
            </p>
          </li>
        </ul>
      ))}

      {/* Modal simple para ver los detalles de la compañía */}
      {showModal && companyToView && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-[20px] p-[20px] max-w-[450px] w-full relative">

            {/* Título del modal */}
            <h2 className="mb-[15px] text-center">Detalles de la Compañía</h2>

            {/* Contenido del modal */}
            <div className="space-y-[10px]">
              <div className="bg-white shadow-md border border-black/10 p-[13px] rounded-[10px]  flex items-center gap-[10px]">
                <p className="">Nombre:</p>
                <p>{companyToView.name}</p>
              </div>

              <div className="bg-white shadow-md border border-black/10 p-[13px] rounded-[10px]  flex items-center gap-[10px]">
                <p className="">NIT:</p>
                <p>{companyToView.nit}</p>
              </div>

              <div className="bg-white shadow-md border border-black/10 p-[13px] rounded-[10px]  flex items-center gap-[10px]">
                <p className="">Teléfono:</p>
                <p>{companyToView.phone || "No especificado"}</p>
              </div>

              <div className="bg-white shadow-md border border-black/10 p-[13px] rounded-[10px]  flex items-center gap-[10px]">
                <p className="">Email:</p>
                <p>{companyToView.email || "No especificado"}</p>
              </div>

              <div className="bg-white shadow-md border border-black/10 p-[13px] rounded-[10px]  flex items-center gap-[10px]">
                <p className="">Dirección:</p>
                <p>{companyToView.address || "No especificada"}</p>
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
