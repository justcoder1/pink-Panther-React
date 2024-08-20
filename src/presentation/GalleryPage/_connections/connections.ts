import { DB_API } from "../../../_utils/http/paths";
import type { T_Response } from "../../../_utils/types";

export const getPictures = async (): Promise<T_Response> => {
  return await DB_API.get("/pictures", { withCredentials: true }).then((res) => res.data.data);
};

export const getVideos = async (): Promise<T_Response> => {
  return await DB_API.get("/videos", { withCredentials: true }).then((res) => res.data.data);
};
