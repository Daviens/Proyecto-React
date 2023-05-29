import AxiosClient from "./axiosClient.js";
export default class UserService {
  constructor() {
    this.client = new AxiosClient()
  }
  register = (data) => {
    const info = {
      url: 'https://ecommapi-production-ce2e.up.railway.app/api/sessions/register',
      method: 'POST',
      body: data,
      config: {
        'Content-Type': 'multipart/form-data',
      }
    }
    return this.client.makePostRequest(info)
  }
  login = (data) => {
    const info = {
      url: 'https://ecommapi-production-ce2e.up.railway.app/api/sessions',
      method: 'POST',
      body: data,
      config: {
        'withCredentials': 'true',
        'Content-Type': 'application/json'
      }
    }
    return this.client.makePostRequest(info)
  }
  getData = () => {
    const info = {
      url: `https://ecommapi-production-ce2e.up.railway.app/api/sessions/islogin`,
      config:{
        'withCredentials': 'true',
        'Content-Type': 'application/json'
      }
    }
    return this.client.makeGetRequest(info)
  }
  logout = () => {
    const info = {url: `https://ecommapi-production-ce2e.up.railway.app/api/sessions/logout`}
    return this.client.makeGetRequest(info)
  }
}