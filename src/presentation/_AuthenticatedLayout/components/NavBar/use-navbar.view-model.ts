import { useSuspenseQuery } from "@tanstack/react-query";
import { useIntl } from "react-intl";
import { useIntlCommon } from "../../../../_utils/lang/intl-common";
import type { ViewModelHook } from "../../../../_utils/types/index";
import { getNavBar } from "../../_connections/connections";
import { getGlobals } from "../../../../_utils/hooks/functions";

export type T_NavBarItem = {
  _id: string;
  title: string;
  link: string;
};

export type T_NavBar = {
  header: string;
  headerItems: T_NavBarItem[];
};

const useNavBarViewModel: ViewModelHook<T_NavBar> = () => {
  const { siteLabel } = useIntlCommon();
  const intl = useIntl();

  // API data

  const { data: navBarData }: { data: T_NavBarItem[] } = useSuspenseQuery({
    queryKey: ["navBar"],
    queryFn: async () => await getNavBar(getGlobals().roleId),
  });

  try {
    navBarData?.map((item) => (item.title = intl.formatMessage({ id: item.title, defaultMessage: item.title })));

    return {
      header: siteLabel,
      headerItems: navBarData,
    };
  } catch (error) {
    return error;
  }
};

export default useNavBarViewModel;
