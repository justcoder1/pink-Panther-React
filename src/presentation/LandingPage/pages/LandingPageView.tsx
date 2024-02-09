import React from 'react';
import LandingPageLayout from '../components/LandingPageLayout/LandingPageLayout';
import useLandingPageModel from './use-landing-page.view-model';

interface IntLandingPage {}

const LandingPage: React.FC<React.PropsWithChildren<IntLandingPage>> = () => {
  const vm = useLandingPageModel();

  return (
    <>
      <LandingPageLayout
        title={vm.title}
        subTitle={vm.subTitle}
        landingImage={vm.landingImage}
        LoginData={vm.LoginData}
      />
    </>
  );
};

export default LandingPage;
