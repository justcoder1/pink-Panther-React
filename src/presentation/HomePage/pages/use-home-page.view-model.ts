import { useErrorHandler } from 'react-error-boundary';
import { useIntl } from 'react-intl';
import { ViewModelHook } from '../../../_utils/types/index';
import imageDesktop from '../../../assets/PP_MainImage.png';
import imageMobile from '../../../assets/PP_MainImage_Small.png';


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

  try {
    const titleOne = intl.formatMessage({
      id: 'title.one',
      description: 'HomePage title One',
      defaultMessage: 'Site about the history of',
    });
    const titleTwo = intl.formatMessage({
      id: 'title.two',
      description: 'HomePage title Two',
      defaultMessage: 'The Pink Panther',
    });

    return {
      titleOne,
      titleTwo,
      imageDesktop,
      imageMobile,
      socials: [{icon: 'icon', link: 'link'}]
    };
  } catch (error) {
      handleError(error);
  }
}

export default useHomePageViewModel;
