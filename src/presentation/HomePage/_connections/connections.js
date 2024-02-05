import { db_API } from '../../../_utils/hooks/functions';

export const getSocials = async () => {
  return await db_API.get('/socials').then((res) => res.data.data);
};
