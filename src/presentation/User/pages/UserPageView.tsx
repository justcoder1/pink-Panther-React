import React from "react";
import AuthenticatedLayout from "../../_AuthenticatedLayout/pages/Authenticated/AuthenticatedLayoutView";
import useUserModel from "./use-user-page.view-model";

const UserPage: React.FC<React.PropsWithChildren> = () => {
  const vm = useUserModel();

  return <AuthenticatedLayout>{vm.title}</AuthenticatedLayout>;
};

export default UserPage;
