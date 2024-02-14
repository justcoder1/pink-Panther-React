import { DB_API } from "../../../_utils/hooks/functions";
import {
  type IntGalleryPicture,
  type IntGalleryVideo,
} from "../components/GalleryPageLayout/use-gallery-page-layout.view-model";

export const getPictures = async (): Promise<IntGalleryPicture[]> => {
  return await DB_API.get("/pinkpanther/pictures").then((res) => res.data.data);
};

export const getVideos = async (): Promise<IntGalleryVideo[]> => {
  return await DB_API.get("/pinkpanther/videos").then((res) => res.data.data);
};
