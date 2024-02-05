import { useSuspenseQuery } from '@tanstack/react-query';
import { useErrorHandler } from 'react-error-boundary';
import { useIntl } from 'react-intl';
import { ViewModelHook } from '../../../../_utils/types/index';
import { getAbout } from '../../_connections/connections';

export interface I_AboutModel {
  title: string;
  subTitle: string;
  contents: string;
}

const useAboutPageLayoutModel: ViewModelHook<I_AboutModel> = () => {
  const handleError = useErrorHandler();
  const intl = useIntl();

  // API data
  const { data: aboutData } = useSuspenseQuery({
    queryKey: ['about'],
    queryFn: getAbout,
  });

  console.log(aboutData);
  

  try {
    const title = intl.formatMessage({
      id: 'title',
      defaultMessage: `${aboutData ? aboutData.title : 'loading'}`,
    });
    const subTitle = intl.formatMessage({
      id: 'subTitle',
      defaultMessage: `${aboutData ? aboutData.subTitle : 'loading'}`,
    });
    const contents = intl.formatMessage({
      id: 'contents',
      defaultMessage: `${aboutData ? aboutData.contents : 'loading'}`,
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

export default useAboutPageLayoutModel;
