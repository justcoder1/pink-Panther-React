import { useIntl } from 'react-intl';

export const useIntlCommon = () => {
  const intl = useIntl();

  const siteLabel = intl.formatMessage({
    id: 'common.intl.site.label',
    description: 'internationalised label for site',
    defaultMessage: 'The Pink Panther',
  });

  const homeLabel = intl.formatMessage({
    id: 'common.intl.home.label',
    description: 'internationalised label for home',
    defaultMessage: 'Home',
  });

  const galleryLabel = intl.formatMessage({
    id: 'common.intl.gallery.label',
    description: 'internationalised label for gallery',
    defaultMessage: 'Gallery',
  });

  const historyLabel = intl.formatMessage({
    id: 'common.intl.history.label',
    description: 'internationalised label for history',
    defaultMessage: 'History',
  });

  const aboutLabel = intl.formatMessage({
    id: 'common.intl.about.label',
    description: 'internationalised label for about',
    defaultMessage: 'About',
  });

  const appendixLabel = intl.formatMessage({
    id: 'common.intl.appendix.label',
    description: 'internationalised label for appendix',
    defaultMessage: 'Appendix',
  });

  const userLabel = intl.formatMessage({
    id: 'common.intl.user.label',
    description: 'internationalised label for user',
    defaultMessage: 'User',
  });

  
  return {
    siteLabel,
    homeLabel,
    galleryLabel,
    historyLabel,
    aboutLabel,
    appendixLabel,
    userLabel
  };
};
