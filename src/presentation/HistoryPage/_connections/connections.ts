import { IntHistoryPageLayoutModel } from '../components/HistoryPageLayout/use-history-page-layout.view-model';
import { DB_API } from '../../../_utils/hooks/functions';

export const getHistory = async (): Promise<IntHistoryPageLayoutModel> => {
  return DB_API.get('/pinkpanther/wikipedia/history').then((res) => res.data.data);
};
