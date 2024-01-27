import { useErrorHandler } from 'react-error-boundary';
import { useIntl } from 'react-intl';
import { ViewModelHook } from '../../../../_utils/types/index';
import { useIntlCommon } from '../../../../_utils/lang/intl-common';
import { NavBarItemsProps } from '../../components/NavBar/NavBar';

// FIX - This needs changing to being collected from API
import items from './navBarData.json'

export interface AuthenticatedLayoutViewModel {
  header: string;
  headerItems: NavBarItemsProps[];
  footer: string;
  footerLink: string;
}

const useAuthenticatedLayoutViewModel: ViewModelHook<
  AuthenticatedLayoutViewModel
> = () => {
  const handleError = useErrorHandler();
  const intl = useIntl();
  const { siteLabel } = useIntlCommon();

  items.map((item) => item.title = intl.formatMessage({
    id: item.title,
    description: item.title,
    defaultMessage: item.title,
  }))

  try {
    const footer: string = intl.formatMessage({
      id: 'footer',
      description: 'footer label',
      defaultMessage: `justCoder ${new Date().getFullYear()}`,
    });
    
    return {
      header: siteLabel,
      headerItems: items,
      footer,
      footerLink: 'http://www.justcoder.co.uk'
    };
  } catch (error) {
      handleError(error);
  }
}

export default useAuthenticatedLayoutViewModel;
