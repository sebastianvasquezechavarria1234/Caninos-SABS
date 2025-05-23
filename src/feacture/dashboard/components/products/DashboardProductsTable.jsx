import React, { useState } from "react";
import axios from "axios";
import { DeleteProducts } from "../../PeticionesApi/PeticionesProducts";

export const DashboardProductsTable = ({
  products,
  setSelectedProduct,
  fetchProducts,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [productDetails, setProductDetails] = useState(null); // Para almacenar los detalles del producto a ver

  // Eliminar producto con confirmación
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este producto?");
    if (!confirmDelete) return;

    try {
      await DeleteProducts(id);
      alert("Producto eliminado con éxito");
      // Actualizar la lista de productos sin recargar la página
      fetchProducts();
    } catch (error) {
      console.error("Error al eliminar producto:", error);
      alert("Error al eliminar el producto");
    }
  };

  // Editar producto
  const handleEdit = (product) => {
    setSelectedProduct(product);
  };

  // Ver detalles del producto
  const handleView = (product) => {
    setProductDetails(product);
    setShowModal(true);
  };

  // Cerrar el modal de detalles
  const closeModal = () => {
    setShowModal(false);
    setProductDetails(null);
  };

  return (
    <section className="w-[75%]">
      {/* Encabezado */}
      <ul className="bg-white/20 grid gap-[5px] grid-cols-5 border-y border-dashed py-[10px]">
        <li><p className="italic underline pl-[20px] border-l border-dashed">Imagen</p></li>
        <li><p className="italic underline pl-[20px] border-x border-dashed">Nombre</p></li>
        <li><p className="italic underline pl-[20px] border-r border-dashed">Precio</p></li>
        <li><p className="italic underline pl-[20px] border-r border-dashed">Categoría</p></li>
        <li><p className="italic underline pl-[20px] border-r border-dashed">Acciones</p></li>
      </ul>

      {/* Lista de productos */}
      {products.map((product) => (
        <ul className="grid gap-[5px] grid-cols-5 border-b border-dashed py-[10px]" key={product.id}>
          <li>
            <p className="pl-[20px] border-l border-dashed">
              <img className="w-[20px] h-[20px] object-cover rounded-[5px]" src={product.imageUrl || "/placeholder.svg"} alt="avatar" />
            </p>
          </li>
          <li>
            <p className="pl-[20px] line-clamp-1 border-x border-dashed">{product.name}</p>
          </li>
          <li>
            <p className="pl-[20px] line-clamp-1 border-r border-dashed">${product.price}</p>
          </li>
          <li>
            <p className="pl-[20px] line-clamp-1 border-r border-dashed">{product.category?.name}</p>
          </li>
          <li className="flex items-center gap-2 pl-[20px] border-r border-dashed">
            <span
              className="cursor-pointer px-[7px] bg-green-200 rounded"
              onClick={() => handleEdit(product)}
            >
              Editar
            </span>
            <span
              className="cursor-pointer px-[7px] bg-blue-200 rounded"
              onClick={() => handleView(product)} // Botón de ver
            >
              Ver
            </span>
            <span
              className="cursor-pointer px-[7px] bg-red-200 rounded"
              onClick={() => handleDelete(product.id)}
            >
              Eliminar
            </span>
          </li>
        </ul>
      ))}

      {/* Modal de detalles del producto */}
      {showModal && productDetails && (
        <div className="pt-[60px] pb-[30px] fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center overflow-y-scroll">
          <div className="bg-white rounded-[20px] p-[20px] max-w-[450px] w-full relative">
            <h2 className="mb-[15px] text-center">
              Detalles del Producto
            </h2>
            <p>Imagen:</p>
            {/* PICTURE PRODUCTS */}
            <picture className="w-full h-[400px] flex justify-center items-center bg-white rounded-[20px] overflow-hidden">
              <img 
                className="h-[80%]" 
                src={productDetails.imageUrl || "/placeholder.svg"} 
                alt="Producto" />
              
            </picture>

            <div className="bg-white shadow-md mb-[10px] border border-black/10 p-[13px] rounded-[10px]">
              <p>Nombre: {productDetails.name}</p>
            </div>

            <div className="bg-white shadow-md mb-[10px] border border-black/10 p-[13px] rounded-[10px]">
              <p>Precio: ${productDetails.price}</p>
            </div>

            <div className="bg-white shadow-md mb-[10px] border border-black/10 p-[13px] rounded-[10px]">
              <p>Categoría: {productDetails.category?.name}</p>
            </div>

            <div className="mb-[10px] bg-white shadow-md  border border-black/10 p-[13px] rounded-[10px]">
              <p>Stock: {productDetails.stock}</p>
            </div>

            <div className="bg-white shadow-md  border border-black/10 p-[13px] rounded-[10px]">
              <p>Descripción: {productDetails.description}</p>
            </div>

            <button
              className="mt-[15px] btn bg-[var(--green)] text-white w-full flex items-center justify-center cursor-pointer"
              onClick={closeModal}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
};