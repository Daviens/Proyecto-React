import axios from "axios";

export default class AxiosClient {
    makeGetRequest = ({url, config}) => axios.get(url, config)
    makePostRequest = ({url, body, config}) => axios.post(url, body, config)
    makePutRequest = ({url, body}) => axios.put(url, body)
    makeDeleteRequest = ({url, body}) => axios.delete(url, body)
}