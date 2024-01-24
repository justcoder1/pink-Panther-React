import AuthenticatedLayoutView from "../../_AuthenticatedLayoutView/pages/Authenticated/AuthenticatedLayoutView";
import useUserViewModel from "./use-user-page.view-model";

export interface UserPageViewProps {}

const UserPageView: React.FC<React.PropsWithChildren<UserPageViewProps>> = () => {
  const vm = useUserViewModel();

  return (
<AuthenticatedLayoutView>{vm.title}</AuthenticatedLayoutView>
  );
};

export default UserPageView;