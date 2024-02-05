import { useQuery } from '@tanstack/react-query';
import { useErrorHandler } from 'react-error-boundary';
import { useIntl } from 'react-intl';
import { ViewModelHook } from '../../../_utils/types/index';
import { getAbout } from '../_connections/connections';

export interface I_AboutModel {
  title: string;
  subTitle: string;
  contents: string;
}

const useAboutModel: ViewModelHook<I_AboutModel> = () => {
  const handleError = useErrorHandler();
  const intl = useIntl();

  // API data
  const { status, data: aboutData } = useQuery({
    queryKey: ['about'],
    queryFn: getAbout,
  });  

  try {
    const title = intl.formatMessage({
      id: 'title',
      defaultMessage: `${status === 'pending' ? 'loading' : aboutData.title}`,
    });
    const subTitle = intl.formatMessage({
      id: 'subTitle',
      defaultMessage: `${status === 'pending' ? 'loading' : aboutData.subTitle}`,
    });
    const contents = intl.formatMessage({
      id: 'contents',
      defaultMessage: `${status === 'pending' ? 'loading' : aboutData.contents}`,
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

export default useAboutModel;
