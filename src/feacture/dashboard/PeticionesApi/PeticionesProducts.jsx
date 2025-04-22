import axios from "axios"

// URL

const url = "http://localhost:3030/"


// CATEGORÍAS----------------------------------------------------
// CONSUMIMOS API PRODUCTS GET
export const GetProducts = async () => {
    try {
        const response = await axios.get(url+"products")
        return response
    } catch (error) {
        console.log("error al consultar datos de products", error)
        return error
    }
}

// DELETE PRODUCTS
export const DeleteProducts = async (id) => {
    try {
        const response = await axios.delete(url+"products/"+id)
        return response
    } catch (error) {
        console.log("Error al eliminar un producto", error)
        return error
        
    }
} 