import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useErrorHandler } from "react-error-boundary";
import { useIntl } from "react-intl";
import { ViewModelHook } from "../../../_utils/types/index";
import { createAppendix, deleteAppendix, getAppendixs, updateAppendix } from "../_connections/connections";

export interface AppendixDataProps {
  _id?: string;
  id: Number;
  reference: string;
  link: string;
  comments: string;
  type: string;
  topic: string;
}

export interface AppendixProps {
  title: string;
  columns: string[];
  rows: any;
  onDeleteClick: (id: string) => void;
  onFormClick: (data: AppendixDataProps) => void;
}

const useAppendixViewModel: ViewModelHook<AppendixProps> = () => {
  const handleError = useErrorHandler();
  const intl = useIntl();
  const queryClient = useQueryClient()

  // API data
  const { status, data: appendixsData } = useQuery({
    queryKey: ["appendix"],
    queryFn: getAppendixs,
  });

  const { mutate: onDeleteClick } = useMutation({
    mutationFn: deleteAppendix,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['appendix'], exact: true})
    }
  })

  const { mutate: onFormClick } = useMutation({
    mutationFn: (data: AppendixDataProps) => (      
      data._id ? updateAppendix(data) : createAppendix(data)
    ),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['appendix'], exact: true})
    }
  })

  try {
    const title = intl.formatMessage({ id: "title", defaultMessage: "Appendix Page - Demonstration in CRUD" });
    
    // ---- Restructure to display in table ---- \\
    const columns = ["id", "Reference", "Topic", 'type', "Comments"];
    const rows = [];
    columns.map((c) => intl.formatMessage({ id: c, defaultMessage: c }));
    if (status === 'success') {
      appendixsData.forEach((a) => {
        rows.push([
          a._id,
          a.id,
          { reference: intl.formatMessage({ id: a.reference, defaultMessage: a.reference }), link: a.link },
          intl.formatMessage({ id: a.topic, defaultMessage: a.topic }),
          intl.formatMessage({ id: a.type, defaultMessage: a.type }),
          a.comments ? intl.formatMessage({ id: a.comments, defaultMessage: a.comments }) : "",
        ]);
      });
    }
    // ------------------------------------------- \\

    return {
      title: title,
      columns: columns,
      rows: rows,
      onDeleteClick,
      onFormClick
    };
  } catch (error) {
    handleError(error);
  }
};

export default useAppendixViewModel;
