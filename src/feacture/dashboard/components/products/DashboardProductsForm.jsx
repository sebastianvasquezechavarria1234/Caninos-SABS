import React, { useState } from "react";
import axios from "axios";
import { IconImage } from "../../../../assets/icons/Icons";

export const DashboardProductsForm = ({ refreshProducts }) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const [imageBase64, setImageBase64] = useState(""); // Para la imagen en Base64
    const [errorMessage, setErrorMessage] = useState(""); // Para mensajes de error
    const [successMessage, setSuccessMessage] = useState(""); // Para mensajes de éxito

    // Función para convertir la imagen a Base64
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setImageBase64(reader.result); // Guardar imagen en Base64
            };
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Si no hay imagen, devolver error
        if (!imageBase64) {
            setErrorMessage("Por favor, selecciona una imagen.");
            return;
        }

        const productData = {
            name,
            price,
            description,
            image: imageBase64, // Enviar la imagen en Base64
        };

        // Enviar los datos al backend
        axios
            .post("http://localhost:3030/products", productData)
            .then((res) => {
                console.log("Producto registrado:", res.data);
                setSuccessMessage("Producto registrado exitosamente.");
                setErrorMessage(""); // Limpiar mensaje de error
                refreshProducts(); // Actualizar la lista de productos
                setName("");
                setPrice("");
                setDescription("");
                setImageBase64(""); // Limpiar la imagen
            })
            .catch((err) => {
                console.error("Error al registrar producto:", err);
                if (err.response) {
                    // Si el servidor responde con un error, mostrarlo
                    console.error("Detalles del error:", err.response.data);
                    setErrorMessage(`Error: ${err.response.data.message || "Error desconocido"}`);
                } else if (err.request) {
                    // Si no hay respuesta del servidor
                    setErrorMessage("No se pudo conectar con el servidor.");
                } else {
                    // Si algo falla antes de la solicitud
                    setErrorMessage("Hubo un error inesperado.");
                }
                setSuccessMessage(""); // Limpiar mensaje de éxito
            });
    };

    return (
        <form
            className="relative w-[25%] p-[20px] rounded-[20px] shadow-lg bg-white border border-black/10"
            onSubmit={handleSubmit}
        >
            <h2 className="mb-[20px] text-center">Productos</h2>
            <div className="flex gap-[10px]">
                <label className="block mb top-[20px]">
                    <p className="translate-y-[16px] translate-x-[4px] px-[4px] bg-white inline-flex">Nombre:</p>
                    <input
                        className="w-full border border-black/10 rounded-[10px] bg-white p-[12px] outline-none shadow-md"
                        type="text"
                        placeholder="por Ejemplo: Jabón"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        minLength={3}
                        required
                    />
                </label>

                <label className="block">
                    <p className="translate-y-[16px] translate-x-[4px] px-[4px] bg-white inline-flex">Precio:</p>
                    <input
                        className="w-full border border-black/10 rounded-[10px] bg-white p-[12px] outline-none shadow-md"
                        type="number"
                        placeholder="10.000"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        minLength={3}
                        required
                    />
                </label>
            </div>

            <label className="block">
                <p className="translate-y-[16px] translate-x-[4px] px-[4px] bg-white inline-flex">Descripción:</p>
                <textarea
                    className="w-full border border-black/10 rounded-[10px] bg-white p-[12px] outline-none shadow-md"
                    placeholder="Descripción del producto"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    minLength={3}
                    required
                />
            </label>

            <label className="relative block">
                <p className="translate-y-[16px] translate-x-[4px] px-[4px] bg-white inline-flex">Imagen:</p>
                <div className="w-full border border-black/10 border-dashed rounded-[10px] bg-white py-[30px] outline-none shadow-md flex justify-center flex-col items-center">
                    <IconImage />
                    <p>Selecciona una imagen</p>
                    <input
                        type="file"
                        className="cursor-pointer opacity-0 w-full h-full absolute top-0 left-0"
                        onChange={handleImageChange}
                    />
                </div>
            </label>

            {/* Mostrar mensajes de éxito o error */}
            {successMessage && <p className="text-green-500">{successMessage}</p>}
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}

            <input
                className="mt-[20px] btn bg-[var(--green)] cursor-pointer text-white w-full"
                type="submit"
                value="Registrar producto"
            />
        </form>
    );
};
