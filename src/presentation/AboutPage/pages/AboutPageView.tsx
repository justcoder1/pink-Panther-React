import { Box } from "@mui/material";
import { useEffect } from "react";
import { useIntlCommon } from "../../../lang/intl-common";
import useAboutViewModel from "./use-about-page.view-model";

export interface AboutPageViewProps {}

const AboutPageView: React.FC<React.PropsWithChildren<AboutPageViewProps>> = () => {
  const vm = useAboutViewModel();

  const { siteLabel, aboutLabel } = useIntlCommon();

  useEffect(() => {
    document.title = `${siteLabel} - ${aboutLabel}`;
  },[]);

  return (
    <Box>
      {vm.title}
    </Box>
  );
};

export default AboutPageView;