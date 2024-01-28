import { ViewModelHook } from '../../../_utils/types/index';
import { useErrorHandler } from 'react-error-boundary';
import { useIntl } from 'react-intl';

import { getWikiPedia } from '../_connections/connections';
import { useQuery } from '@tanstack/react-query';


export interface AboutProps {
  title: string;  
  subTitle: string;
  contents: string;
}

const useAboutViewModel: ViewModelHook<
AboutProps
> = () => {
  const handleError = useErrorHandler();
  const intl = useIntl();
  
  // API data
  const { status, data: aboutData } = useQuery({
    queryKey: ["about"],
    queryFn: getWikiPedia,
  });  

  try {
    const title = intl.formatMessage({
      id: 'title',
      description: 'page title',
      defaultMessage: 'About Page - WikiPedia API',
    });

    const subTitle = intl.formatMessage({
      id: 'subTitle',
      description: 'page subTitle',
      defaultMessage: `${aboutData.description || status}`,
    });

    const contents = intl.formatMessage({
      id: 'contents',
      description: 'page contents',
      defaultMessage: `${aboutData.extract || status}`,
    });

    return {
      title,
      subTitle,
      contents
    };
  } catch (error) {
      handleError(error);
  }
}

export default useAboutViewModel;
