import React from 'react';
import AuthenticatedLayoutView from '../../_AuthenticatedLayout/pages/Authenticated/AuthenticatedLayoutView';
import HistoryPageLayout from '../components/HistoryPageLayout/HistoryPageLayout';
import useHistoryModel from './use-history-page.view-model';

interface I_HistoryPage {}

const HistoryPage: React.FC<React.PropsWithChildren<I_HistoryPage>> = () => {
  const vm = useHistoryModel();

  return (
    <AuthenticatedLayoutView>
      <HistoryPageLayout title={vm.title} content={vm.content} />
    </AuthenticatedLayoutView>
  );
};

export default HistoryPage;
