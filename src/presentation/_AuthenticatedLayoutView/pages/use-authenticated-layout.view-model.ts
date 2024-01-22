import { ViewModelHook } from '../../../_utils/types/index';
import { useErrorHandler } from 'react-error-boundary';
import { useIntl } from 'react-intl';


export interface AuthenticatedLayoutViewModel {
  title: string;  
}

const useAuthenticatedLayoutViewModel: ViewModelHook<
  AuthenticatedLayoutViewModel
> = () => {
  const handleError = useErrorHandler();
  const intl = useIntl();

  try {
    const title = intl.formatMessage({
      id: 'title',
      description: 'page title',
      defaultMessage: 'AuthenticatedLayout',
    });

    return {
      title,
    };
  } catch (error) {
      handleError(error);
  }
}

export default useAuthenticatedLayoutViewModel;
