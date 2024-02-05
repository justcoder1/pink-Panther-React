import { I_AboutModel } from '../pages/use-about-page.view-model';
import { db_API } from '../../../_utils/hooks/functions';

export const getAbout = async ():Promise<I_AboutModel> => {
  return await db_API.get('/wikipedia/about').then((res) => res.data.data);
};
