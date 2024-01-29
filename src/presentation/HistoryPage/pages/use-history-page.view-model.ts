import { useQuery } from "@tanstack/react-query";
import { useErrorHandler } from "react-error-boundary";
import { SetIntlText } from "../../../_utils/lang/locales";
import { ViewModelHook } from "../../../_utils/types/index";
import { getWikiPediaHistory } from "../_connections/connections";

export interface HistoryDataProps {
  headers: [];
  rows: [][];
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
  const content: HistoryContentProps = {title: 'test', data: {headers: [], rows: []}};

  // API data
  const { status, data: historyData } = useQuery({
    queryKey: ["history"],
    queryFn: getWikiPediaHistory,
  });

  if (status === 'success') {
    // workings needed to delimite text string from Wikipedia
    const hData = historyData.topics[11];
    content.title = SetIntlText('subTitle', hData.html);
    content.data.headers = hData.replies[0].html.split('<br>').filter((n, i) => n && i < 6);
    content.data.headers.map((h) => SetIntlText(h, h));

    const tempWorkings = hData.replies[0].html.split('<br>').filter((n, i) => n && i > 5)  
    let start = 0;
    let end = 7;

    while (end < 27) {
      const chunk = tempWorkings.slice(start, end);
      start = end;
      end = start === 7 ? 14 : (start + 6);
      content.data.rows.push(chunk);
    }    
  } 
  

  try {
    const title = SetIntlText('title', 'History Page - WikiPedia API with destructure');

    return {
      title,
      content
    };
  } catch (error) {
    handleError(error);
  }
};

export default useHistoryViewModel;
