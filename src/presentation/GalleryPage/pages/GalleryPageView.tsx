import { Box } from "@mui/material";
import useGalleryViewModel from "./use-gallery-page.view-model";

export interface GalleryPageViewProps {}

const GalleryPageView: React.FC<React.PropsWithChildren<GalleryPageViewProps>> = () => {
  const vm = useGalleryViewModel();

  return (
    <Box>
      {vm.title}
    </Box>
  );
};

export default GalleryPageView;