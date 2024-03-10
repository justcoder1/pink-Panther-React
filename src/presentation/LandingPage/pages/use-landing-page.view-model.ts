import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";

import { useIntlCommon } from "../../../_utils/lang/intl-common";
import { type ViewModelHook } from "../../../_utils/types/index";
import landingImage from "../../../assets/PP_404.png";

export type T_UserLogin = {
  title: string;
  email: string;
  password: string;
  loginLabel: string;
  guestLabel: string;
  createText: string;
  forgotText: string;
  registerLabel: string;
  forgotLabel: string;
  onRegisterClick: () => void;
  onForgotClick: () => void;
};

export type T_LandingPageModel = {
  title: string;
  subTitle: string;
  landingImage: string;
  LoginData: T_UserLogin;
};

export type T_LoginData = {
  emailAddress: string;
  password: string;
};

const useLandingPageModel: ViewModelHook<T_LandingPageModel> = () => {
  const navigate = useNavigate();
  const intl = useIntl();
  const { siteLabel, emailLabel, passwordLabel, loginLabel, registerLabel, guestLabel, forgotLabel } = useIntlCommon();

  const onRegisterClick = (): void => {
    navigate("/home");
  };

  const onForgotClick = (): void => {
    navigate("/home");
  };

  try {
    const subTitle = intl.formatMessage({
      id: "title.one",
      defaultMessage: "Showcase Justin Heath's skills in React and Full-Stack Development",
    });
    const loginTitle = intl.formatMessage({ id: "title.login", defaultMessage: "User Login" });
    const createText = intl.formatMessage({ id: "text.create", defaultMessage: "Create an account:" });
    const forgotText = intl.formatMessage({ id: "text.forgot", defaultMessage: "Forgot account details:" });

    return {
      title: siteLabel,
      subTitle,
      landingImage,
      LoginData: {
        title: loginTitle,
        email: emailLabel,
        password: passwordLabel,
        loginLabel,
        guestLabel,
        createText,
        forgotText,
        registerLabel,
        forgotLabel,
        onRegisterClick,
        onForgotClick,
      },
    };
  } catch (error) {
    return error;
  }
};

export default useLandingPageModel;
