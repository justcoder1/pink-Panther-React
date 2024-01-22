import { ViewModelHook } from '../../../../_utils/types/index';
import { useErrorHandler } from 'react-error-boundary';
import { useIntl } from 'react-intl';


export interface FooterViewModel {
  title: string;  
}

const useFooterViewModel: ViewModelHook<
FooterViewModel
> = () => {
  const handleError = useErrorHandler();
  const intl = useIntl();

  try {
    const title = intl.formatMessage({
      id: 'title',
      description: 'page title',
      defaultMessage: 'Footer',
    });

    return {
      title,
    };
  } catch (error) {
      handleError(error);
  }
}

export default useFooterViewModel;
