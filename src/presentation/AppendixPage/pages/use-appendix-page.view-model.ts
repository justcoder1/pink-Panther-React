import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useConfirm } from 'material-ui-confirm';
import { useSnackbar } from 'notistack';
import { useErrorHandler } from 'react-error-boundary';
import { useIntl } from 'react-intl';
import { noop } from '../../../_utils/hooks/functions';
import { ViewModelHook } from '../../../_utils/types/index';
import { createAppendix, deleteAppendix, getAppendixs, updateAppendix } from '../_connections/connections';

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
  onDeleteClick: (_id: string, id: string) => void;
  onFormClick: (data: AppendixDataProps) => void;
}

const useAppendixViewModel: ViewModelHook<AppendixProps> = () => {
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
    mutationFn: (data: AppendixDataProps) => (data._id ? updateAppendix(data) : createAppendix(data)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['appendix'], exact: true });
    },
  });
  // -------------------- \\

  const onDeleteClick = (_id: string, id: string): void => {
    confirm({ description: `Please confirm deletion of Appendix ${id}?` })
      .then(() => {
        deleteFunc(_id);
        enqueueSnackbar(`Appendix ${id} Deleted`, { variant: 'success' });
      })
      .catch(noop);
  };

  try {
    const title = intl.formatMessage({ id: 'title', defaultMessage: 'Appendix Page - Demonstration in CRUD' });

    // ---- Restructure to display in table ---- \\
    const columns = ['id', 'Reference', 'Topic', 'type', 'Comments'];
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
          a.comments ? intl.formatMessage({ id: a.comments, defaultMessage: a.comments }) : '',
        ]);
      });
    }
    // ------------------------------------------- \\

    return {
      title: title,
      columns: columns,
      rows: rows,
      onDeleteClick,
      onFormClick,
    };
  } catch (error) {
    handleError(error);
  }
};

export default useAppendixViewModel;
