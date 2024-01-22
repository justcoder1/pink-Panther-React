import { Box } from "@mui/material";
import useHistoryViewModel from "./use-history-page.view-model";

export interface HistoryPageViewProps {}

const HistoryPageView: React.FC<React.PropsWithChildren<HistoryPageViewProps>> = () => {
  const vm = useHistoryViewModel();

  return (
    <Box>
      {vm.title}
    </Box>
  );
};

export default HistoryPageView;