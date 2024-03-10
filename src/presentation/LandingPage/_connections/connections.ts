import { DB_API } from "../../../_utils/http/paths";
import type { T_Response } from "../../../_utils/types";
import type { T_LoginData } from "../pages/use-landing-page.view-model";

// FIX - Not created yet
export const login = async (data: T_LoginData): Promise<T_Response> => {
  return await DB_API.post("/authentication/login", data, { withCredentials: true }).then((res) => res.data);
};
