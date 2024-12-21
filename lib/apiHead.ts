import axios from "axios";

export const BASE_API = "https://jsonplaceholder.typicode.com";

export const baseAxios = axios.create({
  baseURL: BASE_API,
});
