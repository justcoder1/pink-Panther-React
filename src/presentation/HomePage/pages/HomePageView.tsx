import AuthenticatedLayoutView from "../../_AuthenticatedLayoutView/pages/Authenticated/AuthenticatedLayoutView";
import useHomePageViewModel from "./use-home-page.view-model";

export interface HomePageViewProps {}

const HomePageView: React.FC<
  React.PropsWithChildren<HomePageViewProps>
> = () => {
  const vm = useHomePageViewModel();

  return <AuthenticatedLayoutView>{vm.title}</AuthenticatedLayoutView>;
};

export default HomePageView;
