import React from 'react';
import AuthenticatedLayout from '../../_AuthenticatedLayout/pages/Authenticated/AuthenticatedLayoutView';
import GalleryPageLayout from '../components/GalleryPageLayout/GalleryPageLayout';
import useGalleryModel from './use-gallery-page.view-model';

interface I_GalleryPage {}

const GalleryPage: React.FC<React.PropsWithChildren<I_GalleryPage>> = () => {
  const vm = useGalleryModel();

  return (
    <AuthenticatedLayout>
      <GalleryPageLayout title={vm.title} pictures={vm.pictures} videos={vm.videos} />
    </AuthenticatedLayout>
  );
};

export default GalleryPage;
