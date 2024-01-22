import { Box } from "@mui/material";
import useUnknownViewModel from "./use-unknown.view-model";

export interface UnknownViewProps {}

const UnknownView: React.FC<React.PropsWithChildren<UnknownViewProps>> = () => {
  const vm = useUnknownViewModel();

  return (
    <Box>
      {vm.title}
    </Box>
  );
};

export default UnknownView;