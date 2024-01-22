import { ViewModelHook } from '../../../../_utils/types/index';
import { useErrorHandler } from 'react-error-boundary';
import { useIntl } from 'react-intl';


export interface NavBarViewModel {
  title: string;  
}

const useNavBarViewModel: ViewModelHook<
NavBarViewModel
> = () => {
  const handleError = useErrorHandler();
  const intl = useIntl();

  try {
    const title = intl.formatMessage({
      id: 'title',
      description: 'page title',
      defaultMessage: 'NavBar',
    });

    return {
      title,
    };
  } catch (error) {
      handleError(error);
  }
}

export default useNavBarViewModel;
