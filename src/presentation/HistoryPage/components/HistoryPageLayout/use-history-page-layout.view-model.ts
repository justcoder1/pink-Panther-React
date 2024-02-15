import { useSuspenseQuery } from "@tanstack/react-query";
import { useIntl } from "react-intl";
import { type ViewModelHook } from "../../../../_utils/types/index";
import { getHistory } from "../../_connections/connections";

type T_HistoryData = {
  columns: string[];
  rows: string[][];
};

type T_HistoryContent = {
  title: string;
  data: T_HistoryData;
};

export type T_HistoryPageLayoutModel = {
  title: string;
  content: T_HistoryContent;
};

const useHistoryPageLayoutModel: ViewModelHook<T_HistoryPageLayoutModel> = () => {
  const intl = useIntl();
  const content: T_HistoryContent = { title: "", data: { columns: [], rows: [] } };

  // API data
  const { data: historyData } = useSuspenseQuery({
    queryKey: ["history"],
    queryFn: getHistory,
  });

  try {
    const title = intl.formatMessage({ id: "title", defaultMessage: `${historyData ? historyData.title : "loading"}` });
    if (historyData) {
      content.title = intl.formatMessage({ id: "subTitle", defaultMessage: historyData.content.title });
      historyData.content.data.columns.forEach((h) => {
        content.data.columns.push(intl.formatMessage({ id: h, defaultMessage: h }));
      });
      historyData.content.data.rows.forEach((r) => content.data.rows.push(r));
    }

    return {
      title,
      content,
    };
  } catch (error) {
    return error;
  }
};

export default useHistoryPageLayoutModel;
