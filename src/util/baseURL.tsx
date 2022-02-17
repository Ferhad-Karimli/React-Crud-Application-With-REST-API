import axios from "axios";

const baseURL = "https://bloggy-api.herokuapp.com/";

export const Axios = axios.create({
  baseURL,
  timeout: 60000,
})