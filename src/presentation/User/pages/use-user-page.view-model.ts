import { ViewModelHook } from '../../../_utils/types/index';
import { useErrorHandler } from 'react-error-boundary';
import { useIntl } from 'react-intl';


export interface UserViewModel {
  title: string;  
}

const useUserViewModel: ViewModelHook<
UserViewModel
> = () => {
  const handleError = useErrorHandler();
  const intl = useIntl();

  try {
    const title = intl.formatMessage({
      id: 'title',
      description: 'page title',
      defaultMessage: 'User',
    });

    return {
      title,
    };
  } catch (error) {
      handleError(error);
  }
}

export default useUserViewModel;
