import axios from "axios"

// URL

const url = "http://localhost:3030/"

// CATEGORÍAS----------------------------------------------------
// CONSUMIMOS API CATEGORÍAS GET
export const GetCategories = async () => {
    try {
        const response = await axios.get(url+"categories")
        return response.data.categories
    } catch (error) {
        console.log("error", error)
        return error
    }
}



// ELIMINAMOS UNA CATEGORÍA
export const DeleteCategories = async (id) => {
    try {
        const response = await axios.delete(url+"categories/"+id)
        return response
    } catch (error) {
        console.log("error", error)
        return error
    }
}