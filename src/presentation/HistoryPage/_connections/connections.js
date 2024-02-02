import axios from 'axios';

const api = axios.create({ baseURL: process.env.REACT_APP_WIKIPEDIA_API });

export const getWikiPediaHistory = async () => {
  try {
    // By passing in the revission this will keep the response stable
    return await api.get('/page/talk/Pink_Panther_(character)/1196918442').then((res) => res.data);
  } catch (err) {
    return await err.response.status;
  }
};
