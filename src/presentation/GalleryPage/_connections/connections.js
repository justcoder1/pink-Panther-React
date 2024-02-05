import { db_API } from '../../../_utils/hooks/functions';

export const getPictures = async () => {
  return await db_API.get('/picture').then((res) => res.data.data);
};

export const getVideos = async () => {
  return await db_API.get('/video').then((res) => res.data.data);
};
