import { DB_API } from '../../../_utils/hooks/functions';

export const getAppendixs = async () => {
  return DB_API.get('/appendix').then((res) => res.data.data);
};

export const createAppendix = async (data) => {
  return DB_API.post('/appendix', data);
};

export const updateAppendix = async (data) => {
  return DB_API.put('/appendix', data);
};

export const deleteAppendix = async (id) => {
  return DB_API.delete(`/appendix?id=${id}`);
};
