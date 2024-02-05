import React from 'react';
import AuthenticatedLayoutView from '../../_AuthenticatedLayout/pages/Authenticated/AuthenticatedLayoutView';
import AboutPageLayout from '../components/AboutPageLayout/AboutPageLayout';
import useAboutModel from './use-about-page.view-model';

interface I_AboutPage {}

const AboutPage: React.FC<React.PropsWithChildren<I_AboutPage>> = () => {
  const vm = useAboutModel();

  return (
    <AuthenticatedLayoutView>
      <AboutPageLayout title={vm.title} subTitle={vm.subTitle} contents={vm.contents} />
    </AuthenticatedLayoutView>
  );
};

export default AboutPage;
