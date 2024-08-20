import { useIntl } from "react-intl";
import type { ViewModelHook } from "../../../_utils/types/index";

export type T_AppendixModel = {
  title: string;
};

const useAppendixModel: ViewModelHook<T_AppendixModel> = () => {
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
