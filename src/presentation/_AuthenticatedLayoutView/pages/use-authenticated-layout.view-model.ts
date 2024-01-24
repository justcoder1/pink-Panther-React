import { ViewModelHook } from '../../../_utils/types/index';
import { useErrorHandler } from 'react-error-boundary';
import { useIntl } from 'react-intl';


export interface AuthenticatedLayoutViewModel {
  footer: string;
  footerLink: string;
}

const useAuthenticatedLayoutViewModel: ViewModelHook<
  AuthenticatedLayoutViewModel
> = () => {
  const handleError = useErrorHandler();
  const intl = useIntl();

  try {
    const footer: string = intl.formatMessage({
      id: 'footer',
      description: 'footer label',
      defaultMessage: `justCoder ${new Date().getFullYear()}`,
    });
    
    return {
      footer,
      footerLink: 'http://www.justcoder.co.uk'
    };
  } catch (error) {
      handleError(error);
  }
}

export default useAuthenticatedLayoutViewModel;
