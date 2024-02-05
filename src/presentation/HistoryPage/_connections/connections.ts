import { I_HistoryPageLayoutModel } from '../components/HistoryPageLayout/use-history-page-layout.view-model';
import { db_API } from '../../../_utils/hooks/functions';

export const getHistory = async ():Promise<I_HistoryPageLayoutModel> => {
  return await db_API.get('/wikipedia/history').then((res) => res.data.data);
};