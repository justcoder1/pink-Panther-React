import { I_NavBarItem } from '../components/NavBar/use-navbar.view-model';
import { db_API } from '../../../_utils/hooks/functions';

export const getNavBar = async ():Promise<I_NavBarItem[]> => {
  return await db_API.get('/navBar').then((res) => res.data.data);
};
