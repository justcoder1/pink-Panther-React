import React from 'react';
import AuthenticatedLayoutView from '../../_AuthenticatedLayoutView/pages/Authenticated/AuthenticatedLayoutView';
import HistoryPageLayout from '../components/HistoryPageLayout/HistoryPageLayout';
import useHistoryViewModel from './use-history-page.view-model';

export interface HistoryPageViewProps {}

const HistoryPageView: React.FC<React.PropsWithChildren<HistoryPageViewProps>> = () => {
  const vm = useHistoryViewModel();

  return (
    <AuthenticatedLayoutView>
      <HistoryPageLayout title={vm.title} content={vm.content} />
    </AuthenticatedLayoutView>
  );
};

export default HistoryPageView;
