import { useSuspenseQuery } from '@tanstack/react-query';
import { useErrorHandler } from 'react-error-boundary';
import { useIntl } from 'react-intl';
import { useIntlCommon } from '../../../../_utils/lang/intl-common';
import { ViewModelHook } from '../../../../_utils/types/index';
import { getNavBar } from '../../_connections/connections';

export interface IntNavBarItem {
  _id: string;
  title: string;
  link: string;
}

export interface IntNavBar {
  header: string;
  headerItems: IntNavBarItem[];
}

const useNavBarViewModel: ViewModelHook<IntNavBar> = () => {
  const handleError = useErrorHandler();
  const { siteLabel } = useIntlCommon();
  const intl = useIntl();

  // API data
  const { data: navBarData } = useSuspenseQuery({
    queryKey: ['navBar'],
    queryFn: getNavBar,
  });

  try {
    navBarData?.map((item) => (item.title = intl.formatMessage({ id: item.title, defaultMessage: item.title })));

    return {
      header: siteLabel,
      headerItems: navBarData,
    };
  } catch (error) {
    handleError(error);
  }
};

export default useNavBarViewModel;
