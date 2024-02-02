import axios from 'axios';

const api = axios.create({ baseURL: process.env.REACT_APP_WIKIPEDIA_API });

export const getWikiPedia = async () => {
  try {
    return await api.get('/page/summary/Pink_Panther_(character)').then((res) => res.data);
  } catch (err) {
    return await err.response.status;
  }
};
