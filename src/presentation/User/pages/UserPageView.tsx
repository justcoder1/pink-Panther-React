import React from 'react';
import AuthenticatedLayoutView from '../../_AuthenticatedLayout/pages/Authenticated/AuthenticatedLayoutView';
import useUserModel from './use-user-page.view-model';

interface I_UserPage {}

const UserPage: React.FC<React.PropsWithChildren<I_UserPage>> = () => {
  const vm = useUserModel();

  return <AuthenticatedLayoutView>{vm.title}</AuthenticatedLayoutView>;
};

export default UserPage;
