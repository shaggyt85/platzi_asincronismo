import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';



async function fetchData(url_api) {
    try {
        const response = await fetch(url_api)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

const fnAsyncAwait = async (url_api) => {
    try {
        const products = await fetchData(`${url_api}/products`)
        console.log(products, 'products')
        const product = await fetchData(`${API}/products/${products[0].id}`)
        console.log(product.title, 'product_titulo')
        const category = await fetchData(`${API}/categories/${product.category.id}`)
        console.log(category.name)
    } catch (error) {
        console.error(error)
    }
}

fnAsyncAwait(API)