import { useIntl } from 'react-intl';

export const useIntlCommon = () => {
  const intl = useIntl();

  const homeLabel = intl.formatMessage({
    id: 'common.intl.home.label',
    description: 'internationalised label for home usage',
    defaultMessage: 'Home',
  });

  
  return {
    homeLabel,
  };
};
