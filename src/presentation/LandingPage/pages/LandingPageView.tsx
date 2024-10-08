import React from "react";
import LandingPageLayout from "../components/LandingPageLayout/LandingPageLayout";
import useLandingPageModel from "./use-landing-page.view-model";

const LandingPage: React.FC<React.PropsWithChildren> = () => {
  const vm = useLandingPageModel();

  return (
    <>
      <LandingPageLayout
        title={vm.title}
        subTitle={vm.subTitle}
        landingImage={vm.landingImage}
        formData={vm.formData}
        createUser={vm.createUser}
      />
    </>
  );
};

export default LandingPage;
