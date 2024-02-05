import { useSuspenseQuery } from '@tanstack/react-query';
import { useErrorHandler } from 'react-error-boundary';
import { useIntlCommon } from '../../../_utils/lang/intl-common';
import { ViewModelHook } from '../../../_utils/types/index';
import { getUsers } from '../_connections/connections';

interface I_UserModel {
  title: string;
}

const useUserModel: ViewModelHook<I_UserModel> = () => {
  const handleError = useErrorHandler();
  const { userLabel } = useIntlCommon();

  // API data
  const { status, data: usersData } = useSuspenseQuery ({
    queryKey: ['users'],
    queryFn: getUsers,
  });

  console.log(status, usersData);

  try {
    return {
      title: userLabel,
    };
  } catch (error) {
    handleError(error);
  }
};

export default useUserModel;
