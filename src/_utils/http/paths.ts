import axios from "axios";

export const DB_API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });
