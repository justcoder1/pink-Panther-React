import { useQuery } from "@tanstack/react-query";
import { useErrorHandler } from "react-error-boundary";
import { useIntl } from "react-intl";
import { ViewModelHook } from "../../../_utils/types/index";
import { getWikiPediaHistory } from "../_connections/connections";

export interface HistoryViewModel {
  title: string;
}

const useHistoryViewModel: ViewModelHook<HistoryViewModel> = () => {
  const handleError = useErrorHandler();
  const intl = useIntl();

  // API data
  const { status, data: historyData } = useQuery({
    queryKey: ["history"],
    queryFn: getWikiPediaHistory,
  });

  console.log(status, historyData);
  

  try {
    const title = intl.formatMessage({
      id: "title",
      description: "page title",
      defaultMessage: "History",
    });

    return {
      title,
    };
  } catch (error) {
    handleError(error);
  }
};

export default useHistoryViewModel;
