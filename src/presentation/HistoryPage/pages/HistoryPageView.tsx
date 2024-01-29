import React, { useEffect } from "react";
import { useIntlCommon } from "../../../_utils/lang/intl-common";
import AuthenticatedLayoutView from "../../_AuthenticatedLayoutView/pages/Authenticated/AuthenticatedLayoutView";
import HistoryPageLayout from "../components/HistoryPageLayout/HistoryPageLayout";
import useHistoryViewModel from "./use-history-page.view-model";

export interface HistoryPageViewProps {}

const HistoryPageView: React.FC<
  React.PropsWithChildren<HistoryPageViewProps>
> = () => {
  const { siteLabel, historyLabel } = useIntlCommon();
  
  const vm = useHistoryViewModel();

  useEffect(() => {
    document.title = `${siteLabel} - ${historyLabel}`;
  });

  return (
  <AuthenticatedLayoutView>
      <HistoryPageLayout 
        title={vm.title}
        content={vm.content}
      />
  </AuthenticatedLayoutView>
  )
};

export default HistoryPageView;
