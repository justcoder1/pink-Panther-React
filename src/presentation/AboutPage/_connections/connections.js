import axios from "axios";
import { WIKIPEDIA_API } from "../../../_utils/connections/connections";

const api = axios.create({ baseURL: WIKIPEDIA_API})

export const getWikiPedia = async () => {  
  try {
    return await api.get('/page/summary/Pink_Panther_(character)').then(res => res.data)
  } catch (err) {
    return await err.response.status
  }
};