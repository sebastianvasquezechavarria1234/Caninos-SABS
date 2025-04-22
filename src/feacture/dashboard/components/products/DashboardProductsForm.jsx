"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import { GetCategories } from "../../PeticionesApi/PeticionesCompanies"

export const DashboardProductsForm = ({
  fetchProducts,
  selectedProduct = null,
  setSelectedProduct = () => {},
}) => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [stock, setStock] = useState("") // Campo para stock
  const [imageUrl, setImageUrl] = useState("") // URL de la imagen
  const [categoryId, setCategoryId] = useState("")
  const [loading, setLoading] = useState(false)
  
  // CONSUMO DE API DE CATEGORIAS PARA EL CAMPO DE CATEGORIAS
  const [categories, setCategories] = useState([])
  useEffect(() => {
    const peticionProducts = async () => {
      const data = await GetCategories()
      setCategories(data)
    }
    peticionProducts()
  }, [])

  // Cargar los datos al editar
  useEffect(() => {
    if (selectedProduct) {
      setName(selectedProduct.name || "")
      setPrice(selectedProduct.price || "")
      setDescription(selectedProduct.description || "")
      setStock(selectedProduct.stock || "")
      setImageUrl(selectedProduct.imageUrl || "")
      setCategoryId(selectedProduct.categoryId || "")
    } else {
      resetForm()
    }
  }, [selectedProduct])

  // Limpiar formulario
  const resetForm = () => {
    setName("")
    setPrice("")
    setDescription("")
    setStock("")
    setImageUrl("")
    setCategoryId("")
    setSelectedProduct(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const productData = {
      name,
      price: Number(price),
      description,
      stock: Number(stock || 0),
      imageUrl,
      categoryId: Number(categoryId),
    }

    try {
      if (selectedProduct) {
        // Editar producto
        await axios.put(`http://localhost:3030/products/${selectedProduct.id}`, productData)
        alert("Producto actualizado con éxito")
      } else {
        // Crear nuevo producto
        await axios.post("http://localhost:3030/products", productData)
        alert("Producto registrado con éxito")
      }

      // Limpiar el formulario
      resetForm()
      
      // Actualizar la lista de productos sin recargar la página
      fetchProducts()
      
    } catch (err) {
      console.error("Error al guardar producto:", err)

      // Mostrar más detalles del error para diagnóstico
      if (err.response) {
        console.error("Datos de respuesta:", err.response.data)
        console.error("Estado HTTP:", err.response.status)
        alert(`Error del servidor: ${err.response.status}. ${JSON.stringify(err.response.data)}`)
      } else if (err.request) {
        console.error("Sin respuesta:", err.request)
        alert("No se recibió respuesta del servidor. Verifique su conexión.")
      } else {
        alert("Error al configurar la solicitud: " + err.message)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="sticky top-[20px] w-full p-[20px] rounded-[20px] shadow-lg bg-white border border-black/10"
    >
      <h2 className="mb-[20px] text-center">Productos</h2>
      <div className="flex gap-[10px] flex-wrap md:flex-nowrap">
        {/* NOMBRE */}
        <label className="block mb top-[20px] w-full md:w-1/2">
          <p className="translate-y-[16px] translate-x-[4px] px-[4px] bg-white inline-flex">Nombre:</p>
          <input
            className="w-full border border-black/10 rounded-[10px] bg-white p-[12px] outline-none shadow-md"
            type="text"
            placeholder="por Ejemplo: Jabón"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        {/* PRECIO */}
        <label className="block w-full md:w-1/2">
          <p className="translate-y-[16px] translate-x-[4px] px-[4px] bg-white inline-flex">Precio:</p>
          <input
            className="w-full border border-black/10 rounded-[10px] bg-white p-[12px] outline-none shadow-md"
            type="number"
            placeholder="10.000"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </label>
      </div>

      <div className="flex gap-[10px] flex-wrap md:flex-nowrap mt-4">
        {/* STOCK */}
        <label className="block w-full md:w-1/2">
          <p className="translate-y-[16px] translate-x-[4px] px-[4px] bg-white inline-flex">Stock:</p>
          <input
            className="w-full border border-black/10 rounded-[10px] bg-white p-[12px] outline-none shadow-md"
            type="number"
            placeholder="Cantidad disponible"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
          />
        </label>

        {/* CATEGORÍA */}
        <label className="block w-full md:w-1/2">
          <p className="translate-y-[16px] translate-x-[4px] px-[4px] bg-white inline-flex">Categoría:</p>
          <select
            className="w-full border h-[55px] border-black/10 rounded-[10px] bg-white p-[12px] outline-none shadow-md"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            required
          >
            <option value="">Selecciona una categoría</option>
            {categories.map((categorie) => (
              <option key={categorie.id} value={categorie.id}>
                {categorie.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      {/* IMAGE URL */}
      <label className="block mt-4">
        <p className="translate-y-[16px] translate-x-[4px] px-[4px] bg-white inline-flex">Url de la imagen:</p>
        <input
          className="w-full border border-black/10 rounded-[10px] bg-white p-[12px] outline-none shadow-md"
          type="text"
          placeholder="https://ejemplo.com/imagen.jpg"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
      </label>

      {/* DESCRIPCIÓN */}
      <label className="block mt-4">
        <p className="translate-y-[16px] translate-x-[4px] px-[4px] bg-white inline-flex">Descripción:</p>
        <textarea
          className="w-full border border-black/10 rounded-[10px] bg-white p-[12px] outline-none shadow-md"
          placeholder="Descripción del producto"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          rows={4}
        />
      </label>

      <input
        className={`mt-[20px] btn bg-[var(--green)] cursor-pointer text-white w-full ${loading ? "opacity-70" : ""}`}
        type="submit"
        value={loading ? "Procesando..." : selectedProduct ? "Actualizar producto" : "Registrar producto"}
        disabled={loading}
      />
    </form>
  )
}