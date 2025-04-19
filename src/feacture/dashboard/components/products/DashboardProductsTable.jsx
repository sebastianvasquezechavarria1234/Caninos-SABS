import React, { useEffect, useState } from "react";
import axios from "axios";

export const DashboardProductsTable = ({
  setSelectedProduct,
  fetchProducts,
}) => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [productDetails, setProductDetails] = useState(null); // Para almacenar los detalles del producto a ver

  // Obtener productos
  const fetchAllProducts = () => {
    axios
      .get("http://localhost:3030/products/")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.error("Error al obtener productos:", err);
      });
  };

  // Eliminar producto con confirmación
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este producto?");
    if (!confirmDelete) return;

    axios
      .delete(`http://localhost:3030/products/${id}`)
      .then(() => {
        fetchAllProducts(); // Refrescar productos
      })
      .catch((err) => {
        console.error("Error al eliminar producto:", err);
      });
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

  useEffect(() => {
    fetchAllProducts();
  }, []);

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
              <img className="w-[20px] h-[20px] object-cover rounded-[5px]" src={product.imageUrl} alt="avatar" />
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
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center">
          <div className="bg-white p-[20px] rounded-lg w-[400px]">
            <h3 className="text-center font-bold text-xl mb-[10px]">Detalles del Producto</h3>
            <p><strong>Nombre:</strong> {productDetails.name}</p>
            <p><strong>Precio:</strong> ${productDetails.price}</p>
            <p><strong>Descripción:</strong> {productDetails.description}</p>
            <p><strong>Imagen:</strong> <img className="w-[50px] h-[50px] object-cover" src={productDetails.imageUrl} alt="Producto" /></p>
            <p><strong>Categoría:</strong> {productDetails.category?.name}</p>

            <button
              className="mt-[10px] w-full bg-gray-500 text-white rounded-lg py-[8px]"
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
