import { useErrorHandler } from 'react-error-boundary';
import { ViewModelHook } from '../../../_utils/types/index';

import { useQuery } from '@tanstack/react-query';
import { SetIntlText } from '../../../_utils/lang/locales';
import { getWikiPedia } from '../_connections/connections';


export interface AboutProps {
  title: string;  
  subTitle: string;
  contents: string;
}

const useAboutViewModel: ViewModelHook<
AboutProps
> = () => {
  const handleError = useErrorHandler();
  
  // API data
  const { status, data: aboutData } = useQuery({
    queryKey: ["about"],
    queryFn: getWikiPedia,
  });    

  try {
    const title = SetIntlText('title','About Page - WikiPedia API');
    const subTitle = SetIntlText('subTitle',`${status === 'pending' ? 'loading' : aboutData.description}`);
    const contents = SetIntlText('contents',`${status === 'pending' ? 'loading' : aboutData.extract}`);

    return {
      title,
      subTitle,
      contents
    };
  } catch (error) {
      handleError(error);
  }
}

export default useAboutViewModel;
