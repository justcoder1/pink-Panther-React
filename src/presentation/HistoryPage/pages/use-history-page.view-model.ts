import { useQuery } from '@tanstack/react-query';
import { useErrorHandler } from 'react-error-boundary';
import { useIntl } from 'react-intl';
import { ViewModelHook, tableTypes } from '../../../_utils/types/index';
import { getWikiPediaHistory } from '../_connections/connections';

export interface HistoryDataProps {
  columns: string[];
  rows: [
    {
      type?: tableTypes;
      value?: tableTypes;
    }[]?
  ];
}

export interface HistoryContentProps {
  title: string;
  data: HistoryDataProps;
}

export interface HistoryProps {
  title: string;
  content: HistoryContentProps;
}

const useHistoryViewModel: ViewModelHook<HistoryProps> = () => {
  const handleError = useErrorHandler();
  const intl = useIntl();
  const content: HistoryContentProps = { title: 'test', data: { columns: [], rows: [] } };

  // API data
  const { status, data: historyData } = useQuery({
    queryKey: ['history'],
    queryFn: getWikiPediaHistory,
  });

  try {
    const title = intl.formatMessage({ id: 'title', defaultMessage: 'History Page - WikiPedia API with destructure' });

    if (status === 'success') {
      // ---- workings needed to delimite text string from Wikipedia ---- \\
      const hData = historyData.topics[11];
      content.title = intl.formatMessage({ id: 'subTitle', defaultMessage: hData.html });
      content.data.columns = hData.replies[0].html.split('<br>').filter((n, i) => n && i < 6);
      content.data.columns.map((h) => intl.formatMessage({ id: h, defaultMessage: h }));

      const tempWorkings = hData.replies[0].html.split('<br>').filter((n, i) => n && i > 5);
      let start = 0;
      let end = 7;

      while (end < 27) {
        let chunk = tempWorkings.slice(start, end);
        start = end;
        end = start === 7 ? 14 : start + 6;
        if (chunk.length > 6) {
          chunk.splice(4, 1);
        }

        // refactor for global table rows
        const finalChunk = [];
        chunk.forEach((c, i) => {
          // Workings for links in data to work working when rendered
          finalChunk.push({ type: `${i === 1 || i === 3 ? 'html' : 'string'}`, value: (i === 1 || i === 3) ? c.replace('./', 'https://en.wikipedia.org/wiki/').replace('">', '" target="_blank">') : c });
        });
        
        content.data.rows.push(finalChunk);
      }
    }
    // -------------------------------------------------------------------- \\
    
    return {
      title,
      content,
    };
  } catch (error) {
    handleError(error);
  }
};

export default useHistoryViewModel;
