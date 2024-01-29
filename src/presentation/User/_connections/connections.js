import axios from "axios";
import { DEVELOPMENT_URI } from "../../../_utils/connections/connections";
// Need to control Environments
// import { JSON_SERVER } from "../../../_utils/connections/connections";
// import { MONGODB_URI } from "../../../_utils/connections/connections";

const api = axios.create({ baseURL: DEVELOPMENT_URI})

export const getUsers = async () => {  
  try {
    return await api.get('/user').then(res => res.data.data)
  } catch (err) {
    return await err.response.status
  }
};