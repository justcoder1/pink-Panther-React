import { useErrorHandler } from 'react-error-boundary';
import { useIntl } from 'react-intl';
import { useNavigate } from 'react-router-dom';

import landingImage from '../../../assets/PP_404.png';
import { useIntlCommon } from '../../../_utils/lang/intl-common';
import { ViewModelHook } from '../../../_utils/types/index';

export interface IntUserLogin {
  title: string;
  email: string;
  password: string;
  loginLabel: string;
  createText: string;
  registerLabel: string;
  onLoginClick: (email: string, password: string) => void;
}

export interface IntLandingPageModel {
  title: string;
  subTitle: string;
  landingImage: string;
  LoginData: IntUserLogin;
}

const useLandingPageModel: ViewModelHook<IntLandingPageModel> = () => {
  const handleError = useErrorHandler();
  const navigate = useNavigate();
  const intl = useIntl();
  const { siteLabel, emailLabel, passwordLabel, loginLabel, registerLabel } = useIntlCommon();

  const onLoginClick = () => {
    navigate('/home');
  };

  try {
    const subTitle = intl.formatMessage({
      id: 'title.one',
      defaultMessage: "Showcase Justin Heath's skills in React and Full-Stack Development",
    });
    const loginTitle = intl.formatMessage({ id: 'title.login', defaultMessage: 'User Login' });
    const createText = intl.formatMessage({ id: 'text.create', defaultMessage: 'Create an account:' });

    return {
      title: siteLabel,
      subTitle: subTitle,
      landingImage,
      LoginData: {
        title: loginTitle,
        email: emailLabel,
        password: passwordLabel,
        loginLabel,
        createText: createText,
        registerLabel,
        onLoginClick,
      },
    };
  } catch (error) {
    handleError(error);
  }
};

export default useLandingPageModel;
