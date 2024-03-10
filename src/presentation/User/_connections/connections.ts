import { DB_API } from "../../../_utils/http/paths";
import type { T_Response } from "../../../_utils/types";

export const getUsers = async (): Promise<T_Response> => {
  return await DB_API.get("/users", { withCredentials: true }).then((res) => res.data.data);
};

export const userLogout = async (): Promise<T_Response> => {
  return await DB_API.post("/authentication/logout", { withCredentials: true });
};
