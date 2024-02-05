import React from 'react';
import AuthenticatedLayout from '../../_AuthenticatedLayout/pages/Authenticated/AuthenticatedLayoutView';
import AppendixPageLayout from '../components/AppendixPageLayout/AppendixPageLayout';
import useAppendixModel from './use-appendix-page.view-model';

interface I_AppendixPage {}

const AppendixPage: React.FC<React.PropsWithChildren<I_AppendixPage>> = () => {
  const vm = useAppendixModel();

  return (
    <AuthenticatedLayout>
      <AppendixPageLayout
        title={vm.title}
        columns={vm.columns}
        rows={vm.rows}
        types={vm.types}
        topics={vm.topics}
        onDeleteClick={vm.onDeleteClick}
        onFormClick={vm.onFormClick}
      />
    </AuthenticatedLayout>
  );
};

export default AppendixPage;
