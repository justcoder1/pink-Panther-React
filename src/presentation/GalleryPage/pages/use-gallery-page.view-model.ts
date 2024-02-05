import { useErrorHandler } from 'react-error-boundary';
import { useIntl } from 'react-intl';

import { ViewModelHook } from '../../../_utils/types/index';

export interface I_GalleryModel {
  title: string;
}

const useGalleryModel: ViewModelHook<I_GalleryModel> = () => {
  const handleError = useErrorHandler();
  const intl = useIntl();

  try {
    const title = intl.formatMessage({ id: 'title', defaultMessage: 'Gallery Page - State Management' });

    return {
      title,
    };
  } catch (error) {
    handleError(error);
  }
};

export default useGalleryModel;
