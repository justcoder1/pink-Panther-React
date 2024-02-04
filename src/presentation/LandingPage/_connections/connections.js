import axios from 'axios';

const api = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

// FIX - Not created yet
export const getSignIn = async () => {
  try {
    return await api.get('/').then((res) => res.data.data);
  } catch (err) {
    return await err.response.status;
  }
};
