import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { ErrorHandler, SkeletonMain } from "../../../_utils/globals/components/Fallbacks/Fallbacks";
import AuthenticatedLayout from "../../_AuthenticatedLayout/pages/Authenticated/AuthenticatedLayoutView";
import AboutPageLayout from "../components/AboutPageLayout/AboutPageLayout";

interface IntAboutPage {}

const AboutPage: React.FC<React.PropsWithChildren<IntAboutPage>> = () => {
  return (
    <AuthenticatedLayout>
      <ErrorBoundary fallback={<ErrorHandler />}>
        <Suspense fallback={<SkeletonMain />}>
          <AboutPageLayout />
        </Suspense>
      </ErrorBoundary>
    </AuthenticatedLayout>
  );
};

export default AboutPage;
