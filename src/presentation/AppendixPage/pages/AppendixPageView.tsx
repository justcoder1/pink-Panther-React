import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { ErrorHandler, SkeletonMain } from "../../../_utils/globals/components/Fallbacks/Fallbacks";
import AuthenticatedLayout from "../../_AuthenticatedLayout/pages/Authenticated/AuthenticatedLayoutView";
import AppendixPageLayout from "../components/AppendixPageLayout/AppendixPageLayout";
import useAppendixModel from "./use-appendix-page.view-model";

interface IntAppendixPage {}

const AppendixPage: React.FC<React.PropsWithChildren<IntAppendixPage>> = () => {
  const vm = useAppendixModel();

  return (
    <AuthenticatedLayout>
      <ErrorBoundary fallback={<ErrorHandler />}>
        <Suspense fallback={<SkeletonMain />}>
          <AppendixPageLayout title={vm.title} />
        </Suspense>
      </ErrorBoundary>
    </AuthenticatedLayout>
  );
};

export default AppendixPage;
