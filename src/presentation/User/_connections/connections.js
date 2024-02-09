import { DB_API } from '../../../_utils/hooks/functions';

export const getUsers = async () => {
  return DB_API.get('/users').then((res) => res.data.data);
};
