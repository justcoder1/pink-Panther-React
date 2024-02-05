import axios from 'axios';

import { I_NavBarItem } from '../components/NavBar/use-navbar.view-model';

const api = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

export const getNavBar = async ():Promise<I_NavBarItem[]> => {
  return await api.get('/navBar').then((res) => res.data.data);
};
