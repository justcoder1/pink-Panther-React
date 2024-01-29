import { useQuery } from "@tanstack/react-query";
import { ViewModelHook } from "../../../_utils/types/index";
import { useErrorHandler } from "react-error-boundary";
import { useIntl } from "react-intl";
import { getAppendixs } from "../_connections/connections";

export interface AppendixViewModel {
  title: string;
}

const useAppendixViewModel: ViewModelHook<AppendixViewModel> = () => {
  const handleError = useErrorHandler();
  const intl = useIntl();

  // API data
  const { status, data: appendixsData } = useQuery({
    queryKey: ["appendix"],
    queryFn: getAppendixs,
  });

  console.log(status, appendixsData);

  try {
    const title = intl.formatMessage({
      id: "title",
      description: "page title",
      defaultMessage: "Appendix",
    });

    return {
      title,
    };
  } catch (error) {
    handleError(error);
  }
};

export default useAppendixViewModel;
