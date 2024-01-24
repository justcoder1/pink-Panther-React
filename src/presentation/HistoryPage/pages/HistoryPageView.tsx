import useHistoryViewModel from "./use-history-page.view-model";
import AuthenticatedLayoutView from "../../_AuthenticatedLayoutView/pages/Authenticated/AuthenticatedLayoutView";

export interface HistoryPageViewProps {}

const HistoryPageView: React.FC<
  React.PropsWithChildren<HistoryPageViewProps>
> = () => {
  const vm = useHistoryViewModel();

  return <AuthenticatedLayoutView>{vm.title}</AuthenticatedLayoutView>;
};

export default HistoryPageView;
