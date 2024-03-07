import { type T_HistoryPageLayoutModel } from "../components/HistoryPageLayout/use-history-page-layout.view-model";
import { DB_API } from "../../../_utils/http/paths";

export const getHistory = async (): Promise<T_HistoryPageLayoutModel> => {
  return await DB_API.get("/wikipedia/history", { withCredentials: true }).then((res) => res.data.data);
};
