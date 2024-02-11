import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorHandler, SkeletonMain } from "../../../_utils/globals/components/Fallbacks/Fallbacks";
import AuthenticatedLayout from "../../_AuthenticatedLayout/pages/Authenticated/AuthenticatedLayoutView";
import GalleryPageLayout from "../components/GalleryPageLayout/GalleryPageLayout";
import useGalleryModel from "./use-gallery-page.view-model";

interface IntGalleryPage {}

const GalleryPage: React.FC<React.PropsWithChildren<IntGalleryPage>> = () => {
  const vm = useGalleryModel();

  return (
    <AuthenticatedLayout>
      <ErrorBoundary fallback={<ErrorHandler />}>
        <Suspense fallback={<SkeletonMain />}>
          <GalleryPageLayout title={vm.title} />
        </Suspense>
      </ErrorBoundary>
    </AuthenticatedLayout>
  );
};

export default GalleryPage;
