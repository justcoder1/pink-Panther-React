import { Box } from "@mui/material";
import useHomeViewModel from "./use-home-page.view-model";

export interface HomePageViewProps {}

const HomePageView: React.FC<React.PropsWithChildren<HomePageViewProps>> = () => {
  const vm = useHomeViewModel();
  console.log(vm);  

  return (
    <Box>
      {vm.title}
    </Box>
  );
};

export default HomePageView;