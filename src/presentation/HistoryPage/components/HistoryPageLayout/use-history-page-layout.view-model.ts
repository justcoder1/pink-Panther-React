import { useSuspenseQuery } from '@tanstack/react-query';
import { useErrorHandler } from 'react-error-boundary';
import { useIntl } from 'react-intl';
import { ViewModelHook, tableTypes } from '../../../../_utils/types/index';
import { getHistory } from '../../_connections/connections';

interface I_HistoryData {
  columns: string[];
  rows: [
    {
      type?: tableTypes;
      value?: tableTypes;
    }[]?
  ];
}

interface I_HistoryContent {
  title: string;
  data: I_HistoryData;
}

export interface I_HistoryPageLayoutModel {
  title: string;
  content: I_HistoryContent;
}

const useHistoryPageLayoutModel: ViewModelHook<I_HistoryPageLayoutModel> = () => {
  const handleError = useErrorHandler();
  const intl = useIntl();
  const content: I_HistoryContent = { title: '', data: { columns: [], rows: [] } };
  
  // API data
  const { data: historyData } = useSuspenseQuery ({
    queryKey: ['history'],
    queryFn: getHistory,
  });  

  try {
    const title = intl.formatMessage({ id: 'title', defaultMessage: `${historyData ? historyData.title: 'loading'}` });
    if (historyData) {
      content.title = intl.formatMessage({ id: 'subTitle', defaultMessage: historyData.content.title });
      historyData.content.data.columns.forEach((h) => {
        content.data.columns.push(intl.formatMessage({ id: h, defaultMessage: h }))
      });
      historyData.content.data.rows.forEach((r) => content.data.rows.push(r));
    }
    
    return {
      title,
      content
    };
  } catch (error) {
    handleError(error);
  }
};

export default useHistoryPageLayoutModel;
