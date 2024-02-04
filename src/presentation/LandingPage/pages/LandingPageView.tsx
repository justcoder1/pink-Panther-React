import React from 'react';
import LandingPageLayout from '../components/LandingPageLayout/LandingPageLayout';
import useLandingPageViewModel from './use-landing-page.view-model';

export interface LandingPageViewProps {}

const LandingPageView: React.FC<React.PropsWithChildren<LandingPageViewProps>> = () => {
  const vm = useLandingPageViewModel();

  return (
    <>
      <LandingPageLayout 
        title={vm.title}
        landingImage={vm.landingImage}
      />
    </>
  );
};

export default LandingPageView;
