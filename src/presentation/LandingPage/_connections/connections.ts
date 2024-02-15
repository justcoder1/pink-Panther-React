import { DB_API } from "../../../_utils/http/paths";

// FIX - Not created yet
export const getSignIn = async (): Promise<Response> => {
  return await DB_API.get("/").then((res) => res.data);
};
