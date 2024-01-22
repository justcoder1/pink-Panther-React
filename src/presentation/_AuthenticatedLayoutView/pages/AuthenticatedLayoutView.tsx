import { Box } from "@mui/material";
import useAuthenticatedLayoutViewModel from "./use-authenticated-layout.view-model";

export interface HomePageViewProps {}

const HomePageView: React.FC<React.PropsWithChildren<HomePageViewProps>> = () => {
  const vm = useAuthenticatedLayoutViewModel();

  return (
    <Box>
      {vm.title}
    </Box>
  );
};

export default HomePageView;