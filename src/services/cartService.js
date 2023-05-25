import AxiosClient from "./axiosClient.js";
export default class CartService{
    constructor(){
        this.client = new AxiosClient()
    }
    getCart = () => {
        const info = {
            url: `https://ecommapi-production-ce2e.up.railway.app/api/carrito`,
            config: {
                'Access-Control-Allow-Origin': '*'
            }
        }
        return this.client.makeGetRequest(info)
    }
    sendProducts = (data) => {
        const info = {
            url: `https://ecommapi-production-ce2e.up.railway.app/api/carrito/finish`,
            method: "POST",
            body: data,
            config: {
                'withCredentials': 'true',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }
        return this.client.makePostRequest(info)
    }
}