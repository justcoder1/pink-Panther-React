import { useSuspenseQuery } from "@tanstack/react-query";
import { useIntlCommon } from "../../../_utils/lang/intl-common";
import { type ViewModelHook } from "../../../_utils/types/index";
import { getUsers } from "../_connections/connections";

interface IntUserModel {
  title: string;
}

const useUserModel: ViewModelHook<IntUserModel> = () => {
  const { userLabel } = useIntlCommon();

  // API data
  const { status, data: usersData } = useSuspenseQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  console.log(status, usersData);

  try {
    return {
      title: userLabel,
    };
  } catch (error) {
    return error;
  }
};

export default useUserModel;
