import axios from "axios";
import type { T_Response } from "../types";

export const DB_API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

export const userLogout = async (): Promise<T_Response> => {
  return await DB_API.get("/authentication/logout", { withCredentials: true });
};
