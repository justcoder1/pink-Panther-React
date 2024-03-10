import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";

import { useIntlCommon } from "../../../_utils/lang/intl-common";
import type { ViewModelHook, T_Response } from "../../../_utils/types/index";
import landingImage from "../../../assets/PP_404.png";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../_connections/connections";

export type T_UserForm = {
  emailLabel: string;
  passwordLabel: string;
  confirmPasswordLabel: string;
  titleLabel: string;
  mainLabel: string;
  guestLabel: string;
  createText: string;
  forgotText: string;
  registerLabel: string;
  forgotLabel: string;
  firstNameLabel: string;
  lastNameLabel: string;
  onRegisterClick: () => void;
  onCreateClick: (data: T_LoginData) => void;
  onForgotClick: () => void;
};

export type T_LandingPageModel = {
  title: string;
  subTitle: string;
  landingImage: string;
  formData: T_UserForm;
  createUser: boolean;
};

export type T_LoginData = {
  emailAddress: string;
  password: string;
};

export type T_CreateData = {
  firstName: string;
  lastName: string;
  emailAddress: string;
  password: string;
};

const useLandingPageModel: ViewModelHook<T_LandingPageModel> = () => {
  const [createUser, setCreateUser] = useState(false);
  const navigate = useNavigate();
  const intl = useIntl();
  const {
    siteLabel,
    emailLabel,
    passwordLabel,
    confirmPasswordLabel,
    loginLabel,
    registerLabel,
    guestLabel,
    forgotLabel,
    createLabel,
    firstNameLabel,
    lastNameLabel,
  } = useIntlCommon();

  const onRegisterClick = (): void => {
    setCreateUser(true);
    navigate("/");
  };

  const { mutate: onCreateClick } = useMutation({
    mutationFn: async (data: T_CreateData): Promise<T_Response> => await registerUser(data),
    onSuccess: () => {
      location.reload();
    },
    onError: (err) => {
      console.error(err);
    },
  });

  const onForgotClick = (): void => {
    navigate("/");
  };

  try {
    const subTitle = intl.formatMessage({
      id: "title.one",
      defaultMessage: "Showcase Justin Heath's skills in React and Full-Stack Development",
    });
    const loginTitle = intl.formatMessage({ id: "title.login", defaultMessage: "Account Login" });
    const createTitle = intl.formatMessage({ id: "title.create", defaultMessage: "Create Account" });
    const createText = intl.formatMessage({ id: "text.create", defaultMessage: "Create an account:" });
    const forgotText = intl.formatMessage({ id: "text.forgot", defaultMessage: "Forgot account details:" });

    return {
      title: siteLabel,
      subTitle,
      landingImage,
      formData: {
        emailLabel,
        passwordLabel,
        confirmPasswordLabel,
        titleLabel: createUser ? createTitle : loginTitle,
        mainLabel: createUser ? createLabel : loginLabel,
        guestLabel,
        createText,
        forgotText,
        registerLabel,
        forgotLabel,
        firstNameLabel,
        lastNameLabel,
        onRegisterClick,
        onCreateClick,
        onForgotClick,
      },
      createUser,
    };
  } catch (error) {
    return error;
  }
};

export default useLandingPageModel;
