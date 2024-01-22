import { ViewModelHook } from '../../../../_utils/types/index';
import { useErrorHandler } from 'react-error-boundary';
import { useIntl } from 'react-intl';


export interface UnknownViewModel {
  title: string;  
}

const useUnknownViewModel: ViewModelHook<
UnknownViewModel
> = () => {
  const handleError = useErrorHandler();
  const intl = useIntl();

  try {
    const title = intl.formatMessage({
      id: 'title',
      description: 'page title',
      defaultMessage: 'Unknown',
    });

    return {
      title,
    };
  } catch (error) {
      handleError(error);
  }
}

export default useUnknownViewModel;
