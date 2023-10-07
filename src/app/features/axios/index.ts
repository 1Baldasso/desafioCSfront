import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
   headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json',
         'Access-Control-Allow-Origin' : '*'
    } 
});