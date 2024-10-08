import { useMutation, useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { useConfirm } from "material-ui-confirm";
import { useSnackbar } from "notistack";
import { useIntl } from "react-intl";
import { noop } from "../../../../_utils/hooks/functions";
import type { ViewModelHook } from "../../../../_utils/types/index";
import { createAppendix, deleteAppendix, getAppendices, updateAppendix } from "../../_connections/connections";

export type T_AppendixData = {
  _id?: string;
  id: number;
  reference: string;
  link: string;
  type: "Documentation" | "Video" | "Reference";
  topic: "TypeScript" | "Testing" | "JavaScript" | "Data" | "Angular" | "React" | "Node" | "SQL" | "MongoDB";
  comments?: string;
};

export type T_AppendixTableModel = {
  columns: string[];
  rows: any;
  types: string[];
  topics: string[];
  onDeleteClick: (_id: string, id: string) => void;
  onFormClick: (data: T_AppendixData) => void;
};

const useAppendixTableModel: ViewModelHook<T_AppendixTableModel> = () => {
  const intl = useIntl();
  const queryClient = useQueryClient();
  const confirm = useConfirm();
  const { enqueueSnackbar } = useSnackbar();

  // ---- API data ---- \\
  const { data: appendixsData }: { data: T_AppendixData[] } = useSuspenseQuery({
    queryKey: ["appendix"],
    queryFn: getAppendices,
  });

  const { mutate: deleteFunc } = useMutation({
    mutationFn: deleteAppendix,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["appendix"], exact: true });
    },
  });

  const { mutate: onFormClick } = useMutation({
    mutationFn: async (data: T_AppendixData) => (data._id ? await updateAppendix(data) : await createAppendix(data)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["appendix"], exact: true });
    },
  });
  // -------------------- \\

  const onDeleteClick = (_id: string, id: string): void => {
    confirm({ title: "Delete", description: `Please confirm removal of Appendix ${id}?` })
      .then(() => {
        deleteFunc(_id);
        enqueueSnackbar(`Appendix ${id} Deleted`, { variant: "success" });
      })
      .catch(noop);
  };

  // FIX - change this to a hook - Issue 27
  const intlStrings = (list: string[]): string[] => list.map((l) => intl.formatMessage({ id: l, defaultMessage: l }));

  try {
    const types = intlStrings(["Documentation", "Reference", "Video"]);
    const topics = intlStrings([
      "Angular",
      "Data",
      "JavaScript",
      "MongoDB",
      "Node",
      "React",
      "SQL",
      "Testing",
      "TypeScript",
    ]);

    // ---- Restructure to display in table ---- \\
    const columns = intlStrings(["id", "Reference", "Topic", "type", "Comments"]);

    const rows = [];
    columns.map((c) => intl.formatMessage({ id: c, defaultMessage: c }));
    if (appendixsData) {
      appendixsData.forEach((a) => {
        rows.push([
          a,
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
      columns,
      rows,
      types,
      topics,
      onDeleteClick,
      onFormClick,
    };
  } catch (error) {
    return error;
  }
};

export default useAppendixTableModel;
