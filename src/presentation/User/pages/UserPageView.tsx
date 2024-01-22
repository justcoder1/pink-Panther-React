import { Box } from "@mui/material";
import useUserViewModel from "./use-user-page.view-model";

export interface UserPageViewProps {}

const UserPageView: React.FC<React.PropsWithChildren<UserPageViewProps>> = () => {
  const vm = useUserViewModel();

  return (
    <Box>
      {vm.title}
    </Box>
  );
};

export default UserPageView;