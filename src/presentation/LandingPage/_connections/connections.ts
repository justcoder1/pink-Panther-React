import { db_API } from '../../../_utils/hooks/functions';

// FIX - Not created yet
export const getSignIn = async () => {
  return await db_API.get('/').then((res) => res.data.data);
};
