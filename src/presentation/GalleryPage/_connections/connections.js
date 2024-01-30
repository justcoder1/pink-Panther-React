import axios from "axios";

const api = axios.create({ baseURL: process.env.REACT_APP_BASE_URL})

export const getPictures = async () => {  
  try {
    return await api.get('/picture').then(res => res.data.data)
  } catch (err) {
    return await err.response.status
  }
};

export const getVideos = async () => {  
  try {
    return await api.get('/video').then(res => res.data.data)
  } catch (err) {
    return await err.response.status
  }
};
