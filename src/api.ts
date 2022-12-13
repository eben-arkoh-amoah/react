import axios from "axios"
import { Country } from "./Types/countryData"

const http = axios.create(
    {
        baseURL: "https://restcountries.com/v2"
    }
)

export const api = {
    getCountries : async (): Promise<Country[]> => {
        let response = await http.get<Country[]>("/all")
        return response.data
},
// getCountryByName: async (name: string) => {
//     let response = await http.get (`/name/${name}?fullText=true`)
//     return response.data
// },
// getCountryByCode: async (code:string) => {
// let response = await http.get(`/alpha/${code}`)
// return response.data
// },
// getBorderNames: async (name:string)=>{
//     let response = await http.get(`/name/${name}?fullText=true`);
//     return response.data
// }
}
