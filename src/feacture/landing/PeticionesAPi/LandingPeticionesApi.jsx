import axios from "axios"

// CONST URL
const url = "http://localhost:3030/"


// COMSUMO API CATEGORIAS
export const ConsumoCategories = async () => {
    try {
        const response = await axios.get(url+"categories")
        return response.data.categories
        
    } catch (error) {
        console.log("error", error)
        throw error
    }
}

// CONSUMO API PRODUCTS
export const ConsumoProducts = async () => {
    const response = await axios(url+"products")
    return response.data.products

}