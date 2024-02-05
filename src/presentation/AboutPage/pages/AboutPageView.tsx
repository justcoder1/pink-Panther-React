import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { ErrorHandler, SkeletonMain } from '../../../_utils/globals/components/Fallbacks/Fallbacks';
import AuthenticatedLayout from '../../_AuthenticatedLayout/pages/Authenticated/AuthenticatedLayoutView';
import AboutPageLayout from '../components/AboutPageLayout/AboutPageLayout';

interface I_AboutPage {}

const AboutPage: React.FC<React.PropsWithChildren<I_AboutPage>> = () => {
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
