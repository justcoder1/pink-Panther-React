import { useIntl } from "react-intl";
import { ViewModelHook } from "../../../_utils/types/index";

export interface IntAppendixModel {
  title: string;
}

const useAppendixModel: ViewModelHook<IntAppendixModel> = () => {
  const intl = useIntl();

  try {
    const title = intl.formatMessage({ id: "title", defaultMessage: "Appendix Page - Demonstration in CRUD" });

    return {
      title,
    };
  } catch (error) {
    return error;
  }
};

export default useAppendixModel;
