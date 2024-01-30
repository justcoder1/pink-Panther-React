import React from "react";
import AuthenticatedLayoutView from "../../_AuthenticatedLayoutView/pages/Authenticated/AuthenticatedLayoutView";
import useAppendixViewModel from "./use-appendix-page.view-model";
import AppendixPageLayout from "../components/AppendixPageLayout/AppendixPageLayout";

export interface AppendixPageViewProps {}

const AppendixPageView: React.FC<React.PropsWithChildren<AppendixPageViewProps>> = () => {
  const vm = useAppendixViewModel();

  return (
    <AuthenticatedLayoutView>
      <AppendixPageLayout title={vm.title} columns={vm.columns} rows={vm.rows} onDeleteClick={vm.onDeleteClick} onFormClick={vm.onFormClick}/>
    </AuthenticatedLayoutView>
  );
};

export default AppendixPageView;
