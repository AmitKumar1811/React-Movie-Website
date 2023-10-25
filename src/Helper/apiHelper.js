import axios from "axios";

const API_URL = `https://api.themoviedb.org/3/` || "";
const axiosApi = axios.create({
baseURL: API_URL,
});
  

export async function get(url, config = { headers: { 'content-type': 'multipart/form-data' } }) {
try{
const response = await axiosApi.get(url, { ...config });
return response; 
} catch (error) {
throw error; 
}
}

