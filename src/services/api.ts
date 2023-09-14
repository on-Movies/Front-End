import axios from 'axios';
import 'dotenv/config';

const tokenAcess = process.env.TOKEN;


export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    timeout: 30000,
    headers:{
        Authorization: `Bearer ${tokenAcess}`
    }
  })

export const apiGetImages = axios.create({
    baseURL: "https://image.tmdb.org/t/p/w500/",
    timeout: 30000,
    headers:{
        Authorization: `Bearer ${tokenAcess}`
    }
})