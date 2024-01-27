import { useErrorHandler } from 'react-error-boundary';
import { useIntl } from 'react-intl';
import { ViewModelHook } from '../../../_utils/types/index';
import imageDesktop from '../../../assets/PP_MainImage.png';
import imageMobile from '../../../assets/PP_MainImage_Small.png';
import { useIntlCommon } from '../../../_utils/lang/intl-common';

// FIX - This needs changing to being collected from API
import socialData from '../../../assets/localAppData.json';

export interface HomePageSocialsProps {
  icon: string;
  link: string;
}

export interface HomePageLayoutProps {
  titleOne: string;
  titleTwo: string;
  imageDesktop: string;
  imageMobile: string;
  socials: HomePageSocialsProps[];
}

const useHomePageViewModel: ViewModelHook<
HomePageLayoutProps
> = () => {
  const handleError = useErrorHandler();
  const intl = useIntl();
  const { siteLabel } = useIntlCommon();

  try {
    const titleOne = intl.formatMessage({
      id: 'title.one',
      description: 'HomePage title One',
      defaultMessage: 'Site about the history of',
    });

    return {
      titleOne,
      titleTwo: siteLabel,
      imageDesktop,
      imageMobile,
      socials: socialData.social
    };
  } catch (error) {
      handleError(error);
  }
}

export default useHomePageViewModel;
