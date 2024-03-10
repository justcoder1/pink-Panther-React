import React from "react";
import AuthenticatedLayout from "../../_AuthenticatedLayout/pages/Authenticated/AuthenticatedLayoutView";
import useUserModel from "./use-user-page.view-model";
import Unknown from "../components/Unknown/Unknown";

const UserPage: React.FC<React.PropsWithChildren> = () => {
  const vm = useUserModel();

  return (
    <AuthenticatedLayout>
      <Unknown reference={vm.title} />
    </AuthenticatedLayout>
  );
};

export default UserPage;
