import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";

import { useIntlCommon } from "../../../_utils/lang/intl-common";
import type { ViewModelHook, T_Response } from "../../../_utils/types/index";
import landingImage from "../../../assets/PP_404.png";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../_connections/connections";
import { userLogout } from "../../../_utils/http/paths";
import { clearUser } from "../../../_utils/hooks/functions";

export type T_UserForm = {
  emailLabel: string;
  passwordLabel: string;
  confirmPasswordLabel: string;
  titleLabel: string;
  mainLabel: string;
  guestLabel: string;
  createText: string;
  forgotText: string;
  cancelLabel: string;
  registerLabel: string;
  forgotLabel: string;
  firstNameLabel: string;
  lastNameLabel: string;
  onRegisterClick: () => void;
  onCreateClick: (data: T_LoginData) => void;
  onCancelClick: () => void;
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
    cancelLabel,
    firstNameLabel,
    lastNameLabel,
  } = useIntlCommon();

  const onRegisterClick = (): void => {
    setCreateUser(true);
    navigate("/register");
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

  const onCancelClick = (): void => {
    setCreateUser(false);
    navigate("/login");
  };

  const onForgotClick = (): void => {
    navigate("/");
  };

  const { mutate: onLogout } = useMutation({
    mutationFn: userLogout,
    onSuccess: () => {
      clearUser();
    },
    onError: (err) => {
      console.error(err);
    },
  });

  useEffect(() => {
    onLogout();
  }, [createUser]);

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
        cancelLabel,
        guestLabel,
        createText,
        forgotText,
        registerLabel,
        forgotLabel,
        firstNameLabel,
        lastNameLabel,
        onRegisterClick,
        onCreateClick,
        onCancelClick,
        onForgotClick,
      },
      createUser,
    };
  } catch (error) {
    return error;
  }
};

export default useLandingPageModel;
