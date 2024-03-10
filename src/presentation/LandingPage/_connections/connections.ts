import { DB_API } from "../../../_utils/http/paths";
import type { T_Response } from "../../../_utils/types";
import type { T_LoginData } from "../pages/use-landing-page.view-model";

export const login = async (data: T_LoginData): Promise<T_Response> => {
  return await DB_API.post("/authentication/login", data, { withCredentials: true }).then((res) => res.data);
};

export const registerUser = async (data: T_LoginData): Promise<T_Response> => {
  return await DB_API.post("/users", data);
};
