import React from 'react';
import LandingPageLayout from '../components/LandingPageLayout/LandingPageLayout';
import useLandingPageModel from './use-landing-page.view-model';

interface I_LandingPage {}

const LandingPage: React.FC<React.PropsWithChildren<I_LandingPage>> = () => {
  const vm = useLandingPageModel();

  return (
    <>
      <LandingPageLayout 
        title={vm.title}
        subTitle={vm.subTitle}
        landingImage={vm.landingImage}
        LoginProps={vm.LoginProps}
      />
    </>
  );
};

export default LandingPage;
