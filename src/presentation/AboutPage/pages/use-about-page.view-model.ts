import { useQuery } from '@tanstack/react-query';
import { useErrorHandler } from 'react-error-boundary';
import { useIntl } from 'react-intl';
import { ViewModelHook } from '../../../_utils/types/index';
import { getWikiPedia } from '../_connections/connections';

export interface AboutProps {
  title: string;
  subTitle: string;
  contents: string;
}

const useAboutViewModel: ViewModelHook<AboutProps> = () => {
  const handleError = useErrorHandler();
  const intl = useIntl();

  // API data
  const { status, data: aboutData } = useQuery({
    queryKey: ['about'],
    queryFn: getWikiPedia,
  });

  try {
    const title = intl.formatMessage({ id: 'title', defaultMessage: 'About Page - WikiPedia API' });
    const subTitle = intl.formatMessage({
      id: 'subTitle',
      defaultMessage: `${status === 'pending' ? 'loading' : aboutData.description}`,
    });
    const contents = intl.formatMessage({
      id: 'contents',
      defaultMessage: `${status === 'pending' ? 'loading' : aboutData.extract}`,
    });

    return {
      title,
      subTitle,
      contents,
    };
  } catch (error) {
    handleError(error);
  }
};

export default useAboutViewModel;
