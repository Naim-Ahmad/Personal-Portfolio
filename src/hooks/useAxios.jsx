import axi from 'axios'

export const axios = axi.create({
    baseURL: import.meta.env.VITE_AXIOS_BASE_URL
})

// console.log(import.meta.env.VITE_AXIOS_BASE_URL)
export default function useAxios() {

    return axios
}