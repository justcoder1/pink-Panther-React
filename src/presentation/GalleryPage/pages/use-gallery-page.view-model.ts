import { useQuery } from '@tanstack/react-query';
import { useErrorHandler } from 'react-error-boundary';
import { useIntl } from 'react-intl';
import { ViewModelHook } from '../../../_utils/types/index';
import { getPictures, getVideos } from '../_connections/connections';

interface I_GalleryPicture {
  _id: string;
  title: string;
  url: string;
  source: string;
  comments?: string;
  likes?: string;
}

interface I_GalleryVideo {
  _id: string;
  title: string;
  episode?: string;
  season?: string;
  likes?: string;
  source: string;
}

interface I_GalleryModel {
  title: string;
  pictures?: I_GalleryPicture[];
  videos?: I_GalleryVideo[];
}

const useGalleryModel: ViewModelHook<I_GalleryModel> = () => {
  const handleError = useErrorHandler();
  const intl = useIntl();

  // API data
  const { data: picturesData } = useQuery({
    queryKey: ['pictures'],
    queryFn: getPictures,
  });

  const { data: videosData } = useQuery({
    queryKey: ['videos'],
    queryFn: getVideos,
  });

  try {
    const title = intl.formatMessage({ id: 'title', defaultMessage: 'Gallery Page - State Management' });

    return {
      title: title,
      pictures: picturesData,
      videos: videosData,
    };
  } catch (error) {
    handleError(error);
  }
};

export default useGalleryModel;
