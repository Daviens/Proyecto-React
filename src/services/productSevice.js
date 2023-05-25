import AxiosClient from "./axiosClient.js";

export default class ProductService {
    constructor(){
        this.client = new AxiosClient()
    }
    getProducts = () => {
        const info = {
            url:`https://ecommapi-production-ce2e.up.railway.app/api/productos`,
            config: {
                'Access-Control-Allow-Origin': '*'
            }
        }
        return this.client.makeGetRequest(info)
    }
    getProductsbyCategory = (category) => {
        const info = {
            url:`https://ecommapi-production-ce2e.up.railway.app/api/productos/category/${category}`,
            config: {
                'Access-Control-Allow-Origin': '*'
            }
        }
        return this.client.makeGetRequest(info)
    }
    getProductById = (id) => {
        const info = {
            url:`https://ecommapi-production-ce2e.up.railway.app/api/productos/${id}`,
            config: {
                'Access-Control-Allow-Origin': '*'
            }
        }
        return this.client.makeGetRequest(info)
    }
    postProduct = (data) => {
        const info = {
            url: 'https://ecommapi-production-ce2e.up.railway.app/api/productos/admin/post',
            method: 'POST',
            body: data,
            config: {
                'withCredentials': 'true',
                'Content-Type': 'multipart/form-data',
                'Access-Control-Allow-Origin': '*'
            }
        }
        return this.client.makePostRequest(info)
    }
    putProduct = (id, data) => {
        const info = {
            url: `https://ecommapi-production-ce2e.up.railway.app/api/productos/${id}`,
            body: data,
            config:{
                'withCredentials': 'true',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }
        return this.client.makePutRequest(info)
    }
}