import { I_HistoryModel } from '../pages/use-history-page.view-model';
import { db_API } from '../../../_utils/hooks/functions';

export const getHistory = async ():Promise<I_HistoryModel> => {
  return await db_API.get('/wikipedia/history').then((res) => res.data.data);
};