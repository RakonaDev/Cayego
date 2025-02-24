import axios from "axios"
import { useTokenAccess } from "../store/useTokenAccess"
//export const apiURL = "https://apis.logosperu.com/apicinco/public/api"
// export const apiURL = "https://www.apinventario.logosperu.com.pe/api"

// export const apiURL = "http://127.0.0.1:8000/api"
export const apiURL = "https://apis.logosperu.com/apicuatro/public/api"
export const imagesUrl = "http://127.0.0.1:8000"
// const token = localStorage.getItem("token");
const { token } = useTokenAccess.getState()

export const apiPublic = axios.create

export const apiAuth = axios.create({
  baseURL: apiURL,
  headers: {
    Authorization: `Bearer ${token}`,
  }
})

/*
apiAuth.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});
*/