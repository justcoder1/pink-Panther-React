import AuthenticatedLayoutView from "../../_AuthenticatedLayoutView/pages/AuthenticatedLayoutView";
import useHomeViewModel from "./use-home-page.view-model";

export interface HomePageViewProps {}

const HomePageView: React.FC<React.PropsWithChildren<HomePageViewProps>> = () => {
  const vm = useHomeViewModel();
  console.log(vm);  

  return (
<AuthenticatedLayoutView>
    {vm.title}
</AuthenticatedLayoutView>
  );
};

export default HomePageView;