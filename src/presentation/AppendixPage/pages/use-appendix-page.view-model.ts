import { useQuery } from "@tanstack/react-query";
import { useErrorHandler } from "react-error-boundary";
import { useIntl } from "react-intl";
import { ViewModelHook } from "../../../_utils/types/index";
import { getAppendixs } from "../_connections/connections";

export interface AppendixDataProps {
  id: Number;
  reference: String;
  link: String;
  comments: String;
  type: String;
  topic: String;
}

export interface AppendixProps {
  title: string;
  columns: string[];
  rows: any;
}

const useAppendixViewModel: ViewModelHook<AppendixProps> = () => {
  const handleError = useErrorHandler();
  const intl = useIntl();

  // API data
  const { status, data: appendixsData } = useQuery({
    queryKey: ["appendix"],
    queryFn: getAppendixs,
  });

  try {
    const title = intl.formatMessage({ id: "title", defaultMessage: "Appendix Page - Demonstration in CRUD" });
    const columns = ["id", "Reference", "Topic", 'type', "Comments"];
    const rows = [];

    columns.map((c) => intl.formatMessage({ id: c, defaultMessage: c }));

    if (status === 'success') {
      appendixsData.sort((a,b) => a.id - b.id);

      appendixsData.forEach((a) => {
        rows.push([
          a.id,
          { reference: intl.formatMessage({ id: a.reference, defaultMessage: a.reference }), link: a.link },
          intl.formatMessage({ id: a.topic, defaultMessage: a.topic }),
          intl.formatMessage({ id: a.type, defaultMessage: a.type }),
          a.comments ? intl.formatMessage({ id: a.comments, defaultMessage: a.comments }) : "",
        ]);
      });
    }

    return {
      title: title,
      columns: columns,
      rows: rows,
    };
  } catch (error) {
    handleError(error);
  }
};

export default useAppendixViewModel;
