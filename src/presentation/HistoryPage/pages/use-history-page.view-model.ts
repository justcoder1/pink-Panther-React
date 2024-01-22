import { ViewModelHook } from '../../../_utils/types/index';
import { useErrorHandler } from 'react-error-boundary';
import { useIntl } from 'react-intl';


export interface HistoryViewModel {
  title: string;  
}

const useHistoryViewModel: ViewModelHook<
HistoryViewModel
> = () => {
  const handleError = useErrorHandler();
  const intl = useIntl();

  try {
    const title = intl.formatMessage({
      id: 'title',
      description: 'page title',
      defaultMessage: 'History',
    });

    return {
      title,
    };
  } catch (error) {
      handleError(error);
  }
}

export default useHistoryViewModel;
