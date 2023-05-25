import AxiosClient from "./axiosClient.js";
export default class UserService {
  constructor() {
    this.client = new AxiosClient()
  }
  register = (data) => {
    const info = {
      url: 'https://ecommapi-production-ce2e.up.railway.app/api/sessions/register',
      method: 'post',
      body: data,
      config: {
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*'
      }
    }
    return this.client.makePostRequest(info)
  }
  login = (data) => {
    const info = {
      url: 'https://ecommapi-production-ce2e.up.railway.app/api/sessions',
      method: 'post',
      body: data,
      config: {
        'withCredentials': 'true',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }
    return this.client.makePostRequest(info)
  }
  getData = () => {
    const info = {
      url: `https://ecommapi-production-ce2e.up.railway.app/api/sessions/islogin`,
      config:{
        'withCredentials': 'true',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }
    return this.client.makeGetRequest(info)
  }
  logout = () => {
    const info = {
      url: `https://ecommapi-production-ce2e.up.railway.app/api/sessions/logout`,
      config:{
        'Access-Control-Allow-Origin': '*'
      }
    }
    return this.client.makeGetRequest(info)
  }
}