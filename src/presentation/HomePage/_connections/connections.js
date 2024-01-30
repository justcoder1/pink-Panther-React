import axios from "axios";

const api = axios.create({ baseURL: process.env.REACT_APP_BASE_URL})

export const getSocials = async () => {  
  try {
    return await api.get('/socials').then(res => res.data.data)
  } catch (err) {
    return await err.response.status
  }
};