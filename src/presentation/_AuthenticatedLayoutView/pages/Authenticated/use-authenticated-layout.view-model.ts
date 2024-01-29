import { useQuery } from "@tanstack/react-query";
import { useErrorHandler } from "react-error-boundary";
import { useIntlCommon } from "../../../../_utils/lang/intl-common";
import { ViewModelHook } from "../../../../_utils/types/index";
import { getNavBar } from "../../_connections/connections";
import { NavBarItemsProps } from "../../components/NavBar/NavBar";
import { SetIntlText } from './../../../../_utils/lang/locales';

export interface AuthenticatedLayoutViewModel {
  header: string;
  headerItems: NavBarItemsProps[];
  footer: string;
  footerLink: string;
}

const useAuthenticatedLayoutViewModel: ViewModelHook<AuthenticatedLayoutViewModel> = () => {
  const handleError = useErrorHandler();
  const { siteLabel } = useIntlCommon();

  // API data
  const { status, data: navBarData } = useQuery({
    queryKey: ["navBar"],
    queryFn: getNavBar,
  });
  
  if (status !== "pending") {
    navBarData.map((item) => item.title = SetIntlText(item.title, item.title));
  }

  try {
    const footer: string = SetIntlText("footer", `justCoder ${new Date().getFullYear()}`);

    return {
      header: siteLabel,
      headerItems: navBarData || [],
      footer,
      footerLink: "http://www.justcoder.co.uk",
    };
  } catch (error) {
    handleError(error);
  }
};

export default useAuthenticatedLayoutViewModel;
