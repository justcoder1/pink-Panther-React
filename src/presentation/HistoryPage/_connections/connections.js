import axios from "axios";
import { WIKIPEDIA_API } from "../../../_utils/connections/connections";

const api = axios.create({ baseURL: WIKIPEDIA_API})

export const getWikiPediaHistory = async () => {  
  try {
    return await api.get('/page/talk/Pink_Panther_(character)/1196918442').then(res => res.data)
  } catch (err) {
    return await err.response.status
  }
};