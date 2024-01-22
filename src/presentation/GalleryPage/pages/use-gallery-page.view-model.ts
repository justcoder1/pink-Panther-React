import { ViewModelHook } from '../../../_utils/types/index';
import { useErrorHandler } from 'react-error-boundary';
import { useIntl } from 'react-intl';


export interface GalleryViewModel {
  title: string;  
}

const useGalleryViewModel: ViewModelHook<
GalleryViewModel
> = () => {
  const handleError = useErrorHandler();
  const intl = useIntl();

  try {
    const title = intl.formatMessage({
      id: 'title',
      description: 'page title',
      defaultMessage: 'Gallery',
    });

    return {
      title,
    };
  } catch (error) {
      handleError(error);
  }
}

export default useGalleryViewModel;
