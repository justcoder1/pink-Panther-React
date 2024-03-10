import type { T_Response } from "../../../_utils/types";
import { DB_API } from "../../../_utils/http/paths";

export const getHistory = async (): Promise<T_Response> => {
  return await DB_API.get("/wikipedia/history", { withCredentials: true }).then((res) => res.data.data);
};
