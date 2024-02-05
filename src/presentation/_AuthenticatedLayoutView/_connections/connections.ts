import axios from 'axios';

import { NavBarItem } from '../components/NavBar/use-navbar.view-model';

const api = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

export const getNavBar = async ():Promise<NavBarItem[]> => {
  return await api.get('/navBar').then((res) => res.data.data);
};
