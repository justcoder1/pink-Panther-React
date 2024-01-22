import { Box } from "@mui/material";
import useAppendixViewModel from "./use-appendix-page.view-model";

export interface AppendixPageViewProps {}

const AppendixPageView: React.FC<React.PropsWithChildren<AppendixPageViewProps>> = () => {
  const vm = useAppendixViewModel();

  return (
    <Box>
      {vm.title}
    </Box>
  );
};

export default AppendixPageView;