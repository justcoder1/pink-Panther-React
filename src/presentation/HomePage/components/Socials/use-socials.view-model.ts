import { useSuspenseQuery } from '@tanstack/react-query';
import { useErrorHandler } from 'react-error-boundary';

import { ViewModelHook } from '../../../../_utils/types/index';
import { getSocials } from '../../_connections/connections';

export interface I_SocialData {
  _id: string;
  social?: string;
  icon: string;
  link: string;
}

export interface I_SocialsModel {
  socials: I_SocialData[];
}

const useSocialsModel: ViewModelHook<I_SocialsModel> = () => {
  const handleError = useErrorHandler();

  // API data
  const { data: socialsData } = useSuspenseQuery({
    queryKey: ['socials'],
    queryFn: getSocials,
  });

  try {
    return {
      socials: socialsData,
    };
  } catch (error) {
    handleError(error);
  }
};

export default useSocialsModel;
