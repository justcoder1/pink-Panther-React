import React from "react";
import AuthenticatedLayoutView from "../../_AuthenticatedLayoutView/pages/Authenticated/AuthenticatedLayoutView";
import useHistoryViewModel from "./use-history-page.view-model";

export interface HistoryPageViewProps {}

const HistoryPageView: React.FC<
  React.PropsWithChildren<HistoryPageViewProps>
> = () => {
  const vm = useHistoryViewModel();

  return <AuthenticatedLayoutView>{vm.title}</AuthenticatedLayoutView>;
};

export default HistoryPageView;
