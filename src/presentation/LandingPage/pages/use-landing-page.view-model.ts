import { useErrorHandler } from 'react-error-boundary';
import { useIntl } from 'react-intl';
import landingImage from '../../../assets/PP_404.png';
import { useIntlCommon } from '../../../_utils/lang/intl-common';
import { ViewModelHook } from '../../../_utils/types/index';

export interface LandingPageProps {
  title: string;
  landingImage: string;
}

const useLandingPageViewModel: ViewModelHook<LandingPageProps> = () => {
  const handleError = useErrorHandler();
  const intl = useIntl();
  const { siteLabel } = useIntlCommon();

  try {
    const titleOne = intl.formatMessage({
      id: 'title.one',
      description: 'LandingPage title One',
      defaultMessage: 'Site about the history of',
    });

    return {
      title: siteLabel,
      landingImage,
    };
  } catch (error) {
    handleError(error);
  }
};

export default useLandingPageViewModel;
