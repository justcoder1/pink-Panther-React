import { useQuery } from "@tanstack/react-query";
import { useErrorHandler } from "react-error-boundary";
import { useIntl } from "react-intl";
import { ViewModelHook } from "../../../_utils/types/index";
import { getUsers } from "../_connections/connections";

export interface UserViewModel {
  title: string;
}

const useUserViewModel: ViewModelHook<UserViewModel> = () => {
  const handleError = useErrorHandler();
  const intl = useIntl();

  // API data
  const { status, data: usersData } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  console.log(status, usersData);
  

  try {
    const title = intl.formatMessage({
      id: "title",
      description: "page title",
      defaultMessage: "User",
    });

    return {
      title,
    };
  } catch (error) {
    handleError(error);
  }
};

export default useUserViewModel;
