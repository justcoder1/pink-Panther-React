import { DB_API } from "../../../_utils/http/paths";
import type { T_LoginData } from "../pages/use-landing-page.view-model";

// FIX - Not created yet
export const login = async (data: T_LoginData): Promise<Response> => {
  return await DB_API.post("/authentication/login", data, { withCredentials: true });
};
