import React from 'react';
import AuthenticatedLayoutView from '../../_AuthenticatedLayoutView/pages/Authenticated/AuthenticatedLayoutView';
import HomePageLayout from '../components/HomePageLayout/HomePageLayout';
import useHomePageViewModel from './use-home-page.view-model';

export interface HomePageViewProps {}

const HomePageView: React.FC<React.PropsWithChildren<HomePageViewProps>> = () => {
  const vm = useHomePageViewModel();

  return (
    <AuthenticatedLayoutView>
      <HomePageLayout
        titleOne={vm.titleOne}
        titleTwo={vm.titleTwo}
        imageDesktop={vm.imageDesktop}
        imageMobile={vm.imageMobile}
        socials={vm.socials}
      />
    </AuthenticatedLayoutView>
  );
};

export default HomePageView;
