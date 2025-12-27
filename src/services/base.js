import axios from "axios"

export const baseApi = axios.create({ baseURL: "http://localhost:3001" })

baseApi.interceptors.response.use(res => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(res)
        }, 1000)
    })
})
