import { db_API } from '../../../_utils/hooks/functions';

export const getAppendixs = async () => {
  return await db_API.get('/appendix').then((res) => res.data.data);
};

export const createAppendix = async (data) => {
  return await db_API.post('/appendix', data);
};

export const updateAppendix = async (data) => {
  return await db_API.put('/appendix', data);
};

export const deleteAppendix = async (id) => {
  return await db_API.delete(`/appendix?id=${id}`);
};
