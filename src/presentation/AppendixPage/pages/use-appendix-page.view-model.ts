import { ViewModelHook } from '../../../_utils/types/index';
import { useErrorHandler } from 'react-error-boundary';
import { useIntl } from 'react-intl';


export interface AppendixViewModel {
  title: string;  
}

const useAppendixViewModel: ViewModelHook<
AppendixViewModel
> = () => {
  const handleError = useErrorHandler();
  const intl = useIntl();

  try {
    const title = intl.formatMessage({
      id: 'title',
      description: 'page title',
      defaultMessage: 'Appendix',
    });

    return {
      title,
    };
  } catch (error) {
      handleError(error);
  }
}

export default useAppendixViewModel;
