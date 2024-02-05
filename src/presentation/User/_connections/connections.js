import { db_API } from '../../../_utils/hooks/functions';

export const getUsers = async () => {
  return await db_API.get('/user').then((res) => res.data.data);
};
