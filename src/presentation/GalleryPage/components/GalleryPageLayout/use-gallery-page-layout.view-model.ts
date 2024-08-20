import { useSuspenseQuery } from "@tanstack/react-query";
import type { ViewModelHook } from "../../../../_utils/types/index";
import { getPictures, getVideos } from "../../_connections/connections";

export type T_UpdatedImage = {
  title: string;
  image: string;
  imageId: number;
};

export type T_GalleryPicture = {
  _id: string;
  title: string;
  url: string;
  source: string;
  comments?: string;
  likes?: string;
};

export type T_GalleryVideo = {
  _id: string;
  title: string;
  episode?: string;
  season?: string;
  likes?: string;
  source: string;
};

export type T_GalleryPageLayoutModel = {
  pictures?: T_GalleryPicture[];
  videos?: T_GalleryVideo[];
};

const useGalleryPageLayoutModel: ViewModelHook<T_GalleryPageLayoutModel> = () => {
  // API data
  const { data: picturesData } = useSuspenseQuery({
    queryKey: ["pictures"],
    queryFn: getPictures,
  });

  const { data: videosData } = useSuspenseQuery({
    queryKey: ["videos"],
    queryFn: getVideos,
  });

  try {
    return {
      pictures: picturesData,
      videos: videosData,
    };
  } catch (error) {
    return error;
  }
};

export default useGalleryPageLayoutModel;
