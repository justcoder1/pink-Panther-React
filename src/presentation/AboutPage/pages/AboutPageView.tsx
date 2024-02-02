import React from 'react';
import AuthenticatedLayoutView from '../../_AuthenticatedLayoutView/pages/Authenticated/AuthenticatedLayoutView';
import AboutPageLayout from '../components/AboutPageLayout/AboutPageLayout';
import useAboutViewModel from './use-about-page.view-model';

export interface AboutPageViewProps {}

const AboutPageView: React.FC<React.PropsWithChildren<AboutPageViewProps>> = () => {
  const vm = useAboutViewModel();

  return (
    <AuthenticatedLayoutView>
      <AboutPageLayout title={vm.title} subTitle={vm.subTitle} contents={vm.contents} />
    </AuthenticatedLayoutView>
  );
};

export default AboutPageView;
