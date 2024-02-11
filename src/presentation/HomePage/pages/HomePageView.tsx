import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { ErrorHandler, Spinner } from "../../../_utils/globals/components/Fallbacks/Fallbacks";
import AuthenticatedLayout from "../../_AuthenticatedLayout/pages/Authenticated/AuthenticatedLayoutView";
import HomePageLayout from "../components/HomePageLayout/HomePageLayout";
import useHomePageModel from "./use-home-page.view-model";

interface IntHomePage {}

const HomePage: React.FC<React.PropsWithChildren<IntHomePage>> = () => {
  const vm = useHomePageModel();

  return (
    <AuthenticatedLayout>
      <ErrorBoundary fallback={<ErrorHandler />}>
        <Suspense fallback={<Spinner />}>
          <HomePageLayout
            titleOne={vm.titleOne}
            titleTwo={vm.titleTwo}
            imageDesktop={vm.imageDesktop}
            imageMobile={vm.imageMobile}
          />
        </Suspense>
      </ErrorBoundary>
    </AuthenticatedLayout>
  );
};

export default HomePage;
