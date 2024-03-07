import { DB_API } from "../../../_utils/http/paths";
import {
  type T_GalleryPicture,
  type T_GalleryVideo,
} from "../components/GalleryPageLayout/use-gallery-page-layout.view-model";

export const getPictures = async (): Promise<T_GalleryPicture[]> => {
  return await DB_API.get("/pictures", { withCredentials: true }).then((res) => res.data.data);
};

export const getVideos = async (): Promise<T_GalleryVideo[]> => {
  return await DB_API.get("/videos", { withCredentials: true }).then((res) => res.data.data);
};
