import React from 'react';
import AuthenticatedLayoutView from '../../_AuthenticatedLayout/pages/Authenticated/AuthenticatedLayoutView';
import HomePageLayout from '../components/HomePageLayout/HomePageLayout';
import useHomePageModel from './use-home-page.view-model';

interface I_HomePage {}

const HomePage: React.FC<React.PropsWithChildren<I_HomePage>> = () => {
  const vm = useHomePageModel();

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

export default HomePage;
