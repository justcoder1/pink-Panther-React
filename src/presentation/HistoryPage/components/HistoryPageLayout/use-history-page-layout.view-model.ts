import { useSuspenseQuery } from "@tanstack/react-query";
import { useIntl } from "react-intl";
import { ViewModelHook, TableTypes } from "../../../../_utils/types/index";
import { getHistory } from "../../_connections/connections";

interface IntHistoryData {
  columns: string[];
  rows: [
    {
      type?: TableTypes;
      value?: TableTypes;
    }[]?
  ];
}

interface IntHistoryContent {
  title: string;
  data: IntHistoryData;
}

export interface IntHistoryPageLayoutModel {
  title: string;
  content: IntHistoryContent;
}

const useHistoryPageLayoutModel: ViewModelHook<IntHistoryPageLayoutModel> = () => {
  const intl = useIntl();
  const content: IntHistoryContent = { title: "", data: { columns: [], rows: [] } };

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
