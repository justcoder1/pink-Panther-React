import type { T_Response } from "../../../_utils/types";
import { DB_API } from "../../../_utils/http/paths";

export const getNavBar = async (): Promise<T_Response> => {
  return await DB_API.get("/navBar", { withCredentials: true }).then((res) => res.data.data);
};
