import React from "react";
import AuthenticatedLayoutView from "../../_AuthenticatedLayoutView/pages/Authenticated/AuthenticatedLayoutView";
import useAppendixViewModel from "./use-appendix-page.view-model";

export interface AppendixPageViewProps {}

const AppendixPageView: React.FC<React.PropsWithChildren<AppendixPageViewProps>> = () => {
  const vm = useAppendixViewModel();

  return (
    <AuthenticatedLayoutView>{vm.title}</AuthenticatedLayoutView>
  );
};

export default AppendixPageView;