import { db_API } from '../../../_utils/hooks/functions';
import { I_GalleryPicture, I_GalleryVideo } from '../components/GalleryPageLayout/use-gallery-page-layout.view-model';

export const getPictures = async ():Promise<I_GalleryPicture[]> => {
  return await db_API.get('/pictures').then((res) => res.data.data);
};

export const getVideos = async ():Promise<I_GalleryVideo[]> => {
  return await db_API.get('/videos').then((res) => res.data.data);
};
