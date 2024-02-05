import { db_API } from '../../../_utils/hooks/functions';
import { I_SocialData } from '../components/Socials/use-socials.view-model';

export const getSocials = async (): Promise<I_SocialData[]> => {
  return await db_API.get('/socials').then((res) => res.data.data);
};
