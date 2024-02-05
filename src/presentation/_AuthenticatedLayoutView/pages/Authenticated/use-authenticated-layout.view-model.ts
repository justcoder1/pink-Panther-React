import { useQuery } from '@tanstack/react-query';
import { useErrorHandler } from 'react-error-boundary';
import { useIntl } from 'react-intl';
import { useIntlCommon } from '../../../../_utils/lang/intl-common';
import { ViewModelHook } from '../../../../_utils/types/index';
import { getNavBar } from '../../_connections/connections';
import { NavBarItemsProps } from '../../components/NavBar/NavBar';

export interface AuthenticatedLayoutViewModel {
  header: string;
  headerItems: NavBarItemsProps[];
  footer: string;
  footerLink: string;
}

const useAuthenticatedLayoutViewModel: ViewModelHook<AuthenticatedLayoutViewModel> = () => {
  const handleError = useErrorHandler();
  const { siteLabel } = useIntlCommon();
  const intl = useIntl();

  // API data
  const { data: navBarData } = useQuery({
    queryKey: ['navBar'],
    queryFn: getNavBar,
  });

  try {
    navBarData?.map((item) => (item.title = intl.formatMessage({ id: item.title, defaultMessage: item.title })));

    const footer: string = intl.formatMessage({
      id: 'footer',
      defaultMessage: `justCoder ${new Date().getFullYear()}`,
    });

    return {
      header: siteLabel,
      headerItems: navBarData,
      footer,
      footerLink: 'http://www.justcoder.co.uk',
    };
  } catch (error) {
    handleError(error);
  }
};

export default useAuthenticatedLayoutViewModel;
