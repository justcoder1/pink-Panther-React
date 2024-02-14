import { useSuspenseQuery } from "@tanstack/react-query";
import { type ViewModelHook } from "../../../../_utils/types/index";
import { getPictures, getVideos } from "../../_connections/connections";

export interface IUpdatedImage {
  title: string;
  image: string;
  imageId: number;
}

export interface IntGalleryPicture {
  _id: string;
  title: string;
  url: string;
  source: string;
  comments?: string;
  likes?: string;
}

export interface IntGalleryVideo {
  _id: string;
  title: string;
  episode?: string;
  season?: string;
  likes?: string;
  source: string;
}

export interface IntGalleryPageLayoutModel {
  pictures?: IntGalleryPicture[];
  videos?: IntGalleryVideo[];
}

const useGalleryPageLayoutModel: ViewModelHook<IntGalleryPageLayoutModel> = () => {
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
