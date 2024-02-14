import { useIntl } from "react-intl";

import { type ViewModelHook } from "../../../../_utils/types/index";

interface IntAuthenticatedLayoutModel {
  footer: string;
  footerLink: string;
}

const useAuthenticatedLayoutModel: ViewModelHook<IntAuthenticatedLayoutModel> = () => {
  const intl = useIntl();

  try {
    const footer: string = intl.formatMessage({
      id: "footer",
      defaultMessage: `justCoder ${new Date().getFullYear()}`,
    });

    return {
      footer,
      footerLink: "http://www.justcoder.co.uk",
    };
  } catch (error) {
    return error;
  }
};

export default useAuthenticatedLayoutModel;
