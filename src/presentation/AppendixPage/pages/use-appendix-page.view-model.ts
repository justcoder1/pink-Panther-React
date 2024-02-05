import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useConfirm } from 'material-ui-confirm';
import { useSnackbar } from 'notistack';
import { useErrorHandler } from 'react-error-boundary';
import { useIntl } from 'react-intl';
import { noop } from '../../../_utils/hooks/functions';
import { ViewModelHook } from '../../../_utils/types/index';
import { createAppendix, deleteAppendix, getAppendixs, updateAppendix } from '../_connections/connections';

export interface I_AppendixData {
  _id?: string;
  id: Number;
  reference: string;
  link: string;
  type: 'Documentation' | 'Video' | 'Reference';
  topic: 'TypeScript' | 'Testing' | 'JavaScript' | 'Data' | 'Angular' | 'React' | 'Node' | 'SQL' | 'MongoDB';
  comments?: string;
}

export interface I_AppendixModel {
  title: string;
  columns: string[];
  rows: any;
  types: string[];
  topics: string[];
  onDeleteClick: (_id: string, id: string) => void;
  onFormClick: (data: I_AppendixData) => void;
}

const useAppendixModel: ViewModelHook<I_AppendixModel> = () => {
  const handleError = useErrorHandler();
  const intl = useIntl();
  const queryClient = useQueryClient();
  const confirm = useConfirm();
  const { enqueueSnackbar } = useSnackbar();

  // ---- API data ---- \\
  const { status, data: appendixsData } = useQuery({
    queryKey: ['appendix'],
    queryFn: getAppendixs,
  });

  const { mutate: deleteFunc } = useMutation({
    mutationFn: deleteAppendix,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['appendix'], exact: true });
    },
  });

  const { mutate: onFormClick } = useMutation({
    mutationFn: (data: I_AppendixData) => (data._id ? updateAppendix(data) : createAppendix(data)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['appendix'], exact: true });
    },
  });
  // -------------------- \\

  const onDeleteClick = (_id: string, id: string): void => {
    confirm({ title: 'Delete', description: `Please confirm removal of Appendix ${id}?` })
      .then(() => {
        deleteFunc(_id);
        enqueueSnackbar(`Appendix ${id} Deleted`, { variant: 'success' });
      })
      .catch(noop);
  };

  // FIX - change this to a hook - Issue 27
  const intlStrings = (list: string[]) => list.map((l) => intl.formatMessage({ id: l, defaultMessage: l }))

  try {
    const title = intl.formatMessage({ id: 'title', defaultMessage: 'Appendix Page - Demonstration in CRUD' });
    const types = intlStrings(['Documentation', 'Reference', 'Video']);
    const topics = intlStrings(['Angular', 'Data', 'JavaScript', 'MongoDB', 'Node', 'React', 'SQL', 'Testing', 'TypeScript']);

    // ---- Restructure to display in table ---- \\
    const columns = intlStrings(['id', 'Reference', 'Topic', 'type', 'Comments']);
    
    const rows = [];
    columns.map((c) => intl.formatMessage({ id: c, defaultMessage: c }));
    if (status === 'success') {
      appendixsData.forEach((a) => {
        rows.push([
          a,
          a._id,
          a.id,
          { reference: intl.formatMessage({ id: a.reference, defaultMessage: a.reference }), link: a.link },
          intl.formatMessage({ id: a.topic, defaultMessage: a.topic }),
          intl.formatMessage({ id: a.type, defaultMessage: a.type }),
          a.comments ? intl.formatMessage({ id: a.comments, defaultMessage: a.comments }) : '',
        ]);
      });
    }
    // ------------------------------------------- \\
    
    return {
      title: title,
      columns: columns,
      rows: rows,
      types: types,
      topics: topics,
      onDeleteClick,
      onFormClick,
    };
  } catch (error) {
    handleError(error);
  }
};

export default useAppendixModel;
