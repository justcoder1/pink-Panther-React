import { DB_API } from "../../../_utils/http/paths";

export const getUsers = async (): Promise<Response> => {
  return await DB_API.get("/pinkpanther/users").then((res) => res.data.data);
};
