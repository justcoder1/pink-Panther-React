import { useSuspenseQuery } from '@tanstack/react-query';
import { useErrorHandler } from 'react-error-boundary';
import { ViewModelHook } from '../../../../_utils/types/index';
import { getPictures, getVideos } from '../../_connections/connections';

export interface I_GalleryPicture {
  _id: string;
  title: string;
  url: string;
  source: string;
  comments?: string;
  likes?: string;
}

export interface I_GalleryVideo {
  _id: string;
  title: string;
  episode?: string;
  season?: string;
  likes?: string;
  source: string;
}

export interface I_GalleryPageLayoutModel {
  pictures?: I_GalleryPicture[];
  videos?: I_GalleryVideo[];
}

const useGalleryPageLayoutModel: ViewModelHook<I_GalleryPageLayoutModel> = () => {
  const handleError = useErrorHandler();

  // API data
  const { data: picturesData } = useSuspenseQuery ({
    queryKey: ['pictures'],
    queryFn: getPictures,
  });

  const { data: videosData } = useSuspenseQuery ({
    queryKey: ['videos'],
    queryFn: getVideos,
  });

  try {
    return {
      pictures: picturesData,
      videos: videosData,
    };
  } catch (error) {
    handleError(error);
  }
};

export default useGalleryPageLayoutModel;
