import { useIntl } from "react-intl";

export const useIntlCommon = (): any => {
  const intl = useIntl();

  const siteLabel = intl.formatMessage({
    id: "common.intl.site.label",
    description: "internationalised label for site",
    defaultMessage: "The Pink Panther",
  });

  const homeLabel = intl.formatMessage({
    id: "common.intl.home.label",
    description: "internationalised label for home",
    defaultMessage: "Home",
  });

  const galleryLabel = intl.formatMessage({
    id: "common.intl.gallery.label",
    description: "internationalised label for gallery",
    defaultMessage: "Gallery",
  });

  const historyLabel = intl.formatMessage({
    id: "common.intl.history.label",
    description: "internationalised label for history",
    defaultMessage: "History",
  });

  const aboutLabel = intl.formatMessage({
    id: "common.intl.about.label",
    description: "internationalised label for about",
    defaultMessage: "About",
  });

  const appendixLabel = intl.formatMessage({
    id: "common.intl.appendix.label",
    description: "internationalised label for appendix",
    defaultMessage: "Appendix",
  });

  const userLabel = intl.formatMessage({
    id: "common.intl.user.label",
    description: "internationalised label for user",
    defaultMessage: "User",
  });

  const emailLabel = intl.formatMessage({
    id: "common.intl.email.label",
    description: "internationalised label for email",
    defaultMessage: "Email",
  });

  const passwordLabel = intl.formatMessage({
    id: "common.intl.password.label",
    description: "internationalised label for password",
    defaultMessage: "Password",
  });

  const confirmPasswordLabel = intl.formatMessage({
    id: "common.intl.confirmPassword.label",
    description: "internationalised label for confirmPassword",
    defaultMessage: "Confirm Password",
  });

  const loginLabel = intl.formatMessage({
    id: "common.intl.login.label",
    description: "internationalised label for login",
    defaultMessage: "Login",
  });

  const guestLabel = intl.formatMessage({
    id: "common.intl.guest.label",
    description: "internationalised label for guest",
    defaultMessage: "Guest",
  });

  const registerLabel = intl.formatMessage({
    id: "common.intl.register.label",
    description: "internationalised label for register",
    defaultMessage: "Register",
  });

  const forgotLabel = intl.formatMessage({
    id: "common.intl.forgot.label",
    description: "internationalised label for forgot",
    defaultMessage: "Forgot",
  });

  const createLabel = intl.formatMessage({
    id: "common.intl.create.label",
    description: "internationalised label for create",
    defaultMessage: "Create",
  });

  const cancelLabel = intl.formatMessage({
    id: "common.intl.cancel.label",
    description: "internationalised label for cancel",
    defaultMessage: "Cancel",
  });

  const firstNameLabel = intl.formatMessage({
    id: "common.intl.firstName.label",
    description: "internationalised label for firstName",
    defaultMessage: "First Name",
  });

  const lastNameLabel = intl.formatMessage({
    id: "common.intl.lastName.label",
    description: "internationalised label for lastName",
    defaultMessage: "Last Name",
  });

  return {
    siteLabel,
    homeLabel,
    galleryLabel,
    historyLabel,
    aboutLabel,
    appendixLabel,
    userLabel,
    emailLabel,
    passwordLabel,
    confirmPasswordLabel,
    loginLabel,
    guestLabel,
    registerLabel,
    forgotLabel,
    createLabel,
    cancelLabel,
    firstNameLabel,
    lastNameLabel,
  };
};
