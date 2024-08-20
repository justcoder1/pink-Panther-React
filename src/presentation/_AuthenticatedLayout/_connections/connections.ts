import type { T_Response } from "../../../_utils/types";
import { DB_API } from "../../../_utils/http/paths";

export const getNavBar = async (roleId: string): Promise<T_Response> => {
  return await DB_API.get(`/navBar?roleId=${roleId}`).then((res) => res.data.data);
};
