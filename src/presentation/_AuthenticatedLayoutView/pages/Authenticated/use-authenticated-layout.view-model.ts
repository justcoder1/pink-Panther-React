import { useErrorHandler } from 'react-error-boundary';
import { useIntl } from 'react-intl';

import { ViewModelHook } from '../../../../_utils/types/index';

export interface AuthenticatedLayoutViewModel {
  footer: string;
  footerLink: string;
}

const useAuthenticatedLayoutViewModel: ViewModelHook<AuthenticatedLayoutViewModel> = () => {
  const handleError = useErrorHandler();
  const intl = useIntl();

  try {
    const footer: string = intl.formatMessage({
      id: 'footer',
      defaultMessage: `justCoder ${new Date().getFullYear()}`,
    });

    return {
      footer,
      footerLink: 'http://www.justcoder.co.uk',
    };
  } catch (error) {
    handleError(error);
  }
};

export default useAuthenticatedLayoutViewModel;
