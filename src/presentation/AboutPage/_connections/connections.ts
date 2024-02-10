import { DB_API } from '../../../_utils/hooks/functions';
import { IntAboutPageLayout } from '../components/AboutPageLayout/use-about-page-layout.view-model';

export const getAbout = async (): Promise<IntAboutPageLayout> => {
  return DB_API.get('/pinkpanther/wikipedia/about').then((res) => res.data.data);
};
