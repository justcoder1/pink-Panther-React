import { useQuery } from "@tanstack/react-query";
import { useErrorHandler } from "react-error-boundary";
import { useIntlCommon } from "../../../_utils/lang/intl-common";
import { ViewModelHook } from "../../../_utils/types/index";
import { getAppendixs } from "../_connections/connections";

export interface AppendixViewModel {
  title: string;
}

const useAppendixViewModel: ViewModelHook<AppendixViewModel> = () => {
  const handleError = useErrorHandler();
  const { appendixLabel } = useIntlCommon();

  // API data
  const { status, data: appendixsData } = useQuery({
    queryKey: ["appendix"],
    queryFn: getAppendixs,
  });

  console.log(status, appendixsData);

  try {
    return {
      title: appendixLabel,
    };
  } catch (error) {
    handleError(error);
  }
};

export default useAppendixViewModel;
