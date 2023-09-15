import axios from 'axios';

const tokenAcess = import.meta.env.VITE_REACT_APP_TOKEN;

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    timeout: 30000,
    headers:{
        Authorization: `Bearer ${tokenAcess}`
    }
  })
