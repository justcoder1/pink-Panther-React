import { useIntlCommon } from "../../../_utils/lang/intl-common";
import type { ViewModelHook } from "../../../_utils/types/index";

type T_UserModel = {
  title: string;
};

const useUserModel: ViewModelHook<T_UserModel> = () => {
  const { userLabel } = useIntlCommon();

  try {
    return {
      title: userLabel,
    };
  } catch (error) {
    return error;
  }
};

export default useUserModel;
