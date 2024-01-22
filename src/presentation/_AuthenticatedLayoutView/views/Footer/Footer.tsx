import { Box } from "@mui/material";
import useFooterViewModel from "./use-footer.view-model";

export interface FooterViewProps {}

const FooterView: React.FC<React.PropsWithChildren<FooterViewProps>> = () => {
  const vm = useFooterViewModel();

  return (
    <Box>
      {vm.title}
    </Box>
  );
};

export default FooterView;