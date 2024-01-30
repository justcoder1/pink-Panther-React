import axios from "axios";

const api = axios.create({ baseURL: process.env.REACT_APP_BASE_URL})

export const getAppendixs = async () => {  
  try {
    return await api.get('/appendix').then(res => res.data.data)
  } catch (err) {
    return await err.response.status
  }
};

export const createAppendix = async (data) => {  
  try {
    return await api.post('/appendix', data)
  } catch (err) {
    return await err.response.status
  }
};

export const updateAppendix = async (data) => {  
  try {
    return await api.put('/appendix', data)
  } catch (err) {
    return await err.response.status
  }
};

export const deleteAppendix = async (id) => {
  try {
    return await api.delete(`/appendix?id=${id}`)
  } catch (err) {
    return await err.response.status
  }
};