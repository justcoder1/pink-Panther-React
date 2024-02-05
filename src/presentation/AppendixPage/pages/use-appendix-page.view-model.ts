import { useErrorHandler } from 'react-error-boundary';
import { useIntl } from 'react-intl';
import { ViewModelHook } from '../../../_utils/types/index';

export interface I_AppendixModel {
  title: string;
}

const useAppendixModel: ViewModelHook<I_AppendixModel> = () => {
  const handleError = useErrorHandler();
  const intl = useIntl();

  try {
    const title = intl.formatMessage({ id: 'title', defaultMessage: 'Appendix Page - Demonstration in CRUD' });

    return {
      title,
    };
  } catch (error) {
    handleError(error);
  }
};

export default useAppendixModel;
