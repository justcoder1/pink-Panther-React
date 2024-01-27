import axios from "axios";
import { LOCALDATA_URI } from "../../../_utils/connections/connections";

const api = axios.create({ baseURL: LOCALDATA_URI})

export const getNavBar = async () => {  
  try {
    return await api.get('/navBar').then(res => res.data)
  } catch (err) {
    return await err.response.status
  }
};