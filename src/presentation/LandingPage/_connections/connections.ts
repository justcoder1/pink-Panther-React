import { DB_API } from "../../../_utils/hooks/functions";

// FIX - Not created yet
export const getSignIn = async () => {
  return DB_API.get("/").then((res) => res.data.data);
};
