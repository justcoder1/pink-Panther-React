import { Box } from "@mui/material";
import useAboutViewModel from "./use-about-page.view-model";

export interface AboutPageViewProps {}

const AboutPageView: React.FC<React.PropsWithChildren<AboutPageViewProps>> = () => {
  const vm = useAboutViewModel();

  return (
    <Box>
      {vm.title}
    </Box>
  );
};

export default AboutPageView;