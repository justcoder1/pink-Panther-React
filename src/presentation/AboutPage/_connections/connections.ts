import { DB_API } from "../../../_utils/http/paths";
import type { T_Response } from "../../../_utils/types";

export const getAbout = async (): Promise<T_Response> => {
  return await DB_API.get("/wikipedia/about", { withCredentials: true }).then((res) => res.data.data);
};
