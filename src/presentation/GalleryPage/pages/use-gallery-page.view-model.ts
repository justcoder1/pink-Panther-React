import { useQuery } from '@tanstack/react-query';
import { useErrorHandler } from 'react-error-boundary';
import { useIntl } from 'react-intl';
import { ViewModelHook } from '../../../_utils/types/index';
import { getPictures, getVideos } from '../_connections/connections';

export interface GalleryPictureProps {
  _id: string;
  title: string;
  url: string;
  source: string;
  comments?: string;
  likes?: string;
}

export interface GalleryVideoProps {
  _id: string;
  title: string;
  episode?: string;
  season?: string;
  likes?: string;
  source: string;
}

export interface GalleryProps {
  title: string;
  pictures?: GalleryPictureProps[];
  videos?: GalleryVideoProps[];
}

const useGalleryViewModel: ViewModelHook<GalleryProps> = () => {
  const handleError = useErrorHandler();
  const intl = useIntl();

  // API data
  const { status: pictureStatus, data: picturesData } = useQuery({
    queryKey: ['pictures'],
    queryFn: getPictures,
  });

  const { status: videoStatus, data: videosData } = useQuery({
    queryKey: ['videos'],
    queryFn: getVideos,
  });

  console.log(pictureStatus, picturesData);
  console.log(videoStatus, videosData);

  try {
    const title = intl.formatMessage({ id: 'title', defaultMessage: 'Gallery Page - Example of state management' });

    return {
      title: title,
      pictures: picturesData,
      videos: videosData,
    };
  } catch (error) {
    handleError(error);
  }
};

export default useGalleryViewModel;
