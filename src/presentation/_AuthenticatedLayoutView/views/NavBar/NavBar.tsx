import { Box } from "@mui/material";
import useNavBarViewModel from "./use-navBar.view-model";

export interface NavBarViewProps {}

const NavBarView: React.FC<React.PropsWithChildren<NavBarViewProps>> = () => {
  const vm = useNavBarViewModel();

  return (
    <Box>
      {vm.title}
    </Box>
  );
};

export default NavBarView;