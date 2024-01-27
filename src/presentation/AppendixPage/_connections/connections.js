import axios from "axios";

const api = axios.create({ baseURL: 'https://en.wikipedia.org/api/rest_v1/page/summary'})

export const getWikiPedia = async () => {  
  try {
    return await api.get('/The_Pink_Panther').then(res => res.data)
  } catch (err) {
    return await err.response.status
  }
};