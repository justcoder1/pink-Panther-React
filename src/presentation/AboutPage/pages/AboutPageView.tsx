import { useEffect } from "react";
import { useIntlCommon } from "../../../lang/intl-common";
import AuthenticatedLayoutView from "../../_AuthenticatedLayoutView/pages/Authenticated/AuthenticatedLayoutView";
import useAboutViewModel from "./use-about-page.view-model";

export interface AboutPageViewProps {}

const AboutPageView: React.FC<React.PropsWithChildren<AboutPageViewProps>> = () => {
  const vm = useAboutViewModel();

  const { siteLabel, aboutLabel } = useIntlCommon();

  useEffect(() => {
    document.title = `${siteLabel} - ${aboutLabel}`;
  },[]);

  return (
    <AuthenticatedLayoutView>{vm.title}</AuthenticatedLayoutView>
  );
};

export default AboutPageView;