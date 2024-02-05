import { useErrorHandler } from 'react-error-boundary';
import { useIntl } from 'react-intl';

import { ViewModelHook } from '../../../../_utils/types/index';

interface I_AuthenticatedLayoutModel {
  footer: string;
  footerLink: string;
}

const useAuthenticatedLayoutModel: ViewModelHook<I_AuthenticatedLayoutModel> = () => {
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

export default useAuthenticatedLayoutModel;
