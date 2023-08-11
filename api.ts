// src/api.ts
import axios from 'axios';

const API_KEY = '851111cf98msh97c434a7ec52089p175541jsn3a5f03b1bd0c';
const BASE_URL = 'https://apidojo-wf.p.rapidapi.com';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'X-RapidAPI-Key': API_KEY,
  },
});

export const getProducts = () => instance.get('/products/v3/all');

// Add more API functions as needed
