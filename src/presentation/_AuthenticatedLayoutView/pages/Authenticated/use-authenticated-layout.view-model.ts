import { useErrorHandler } from 'react-error-boundary';
import { useIntl } from 'react-intl';
import { ViewModelHook } from '../../../../_utils/types/index';
import { useIntlCommon } from '../../../../lang/intl-common';
import { NavBarItemsProps } from '../../components/NavBar/NavBar';

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
  const { siteLabel, homeLabel, galleryLabel, historyLabel, aboutLabel, appendixLabel } = useIntlCommon();

  // FIX - This needs changing to being collected from API
  const items = [
    { title: homeLabel, link: '/home' },
    { title: galleryLabel, link: '/gallery' },
    { title: historyLabel, link: '/history' },
    { title: aboutLabel, link: '/about' },
    { title: appendixLabel, link: '/appendix' }
  ]

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
