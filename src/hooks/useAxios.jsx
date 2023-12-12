import axi from 'axios'

export const axios = axi.create({
    baseURL: 'http://localhost:5000'
})
export default function useAxios() {

    return axios
}