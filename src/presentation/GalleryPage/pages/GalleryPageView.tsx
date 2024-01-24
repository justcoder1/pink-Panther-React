import AuthenticatedLayoutView from "../../_AuthenticatedLayoutView/pages/Authenticated/AuthenticatedLayoutView";
import useGalleryViewModel from "./use-gallery-page.view-model";

export interface GalleryPageViewProps {}

const GalleryPageView: React.FC<React.PropsWithChildren<GalleryPageViewProps>> = () => {
  const vm = useGalleryViewModel();

  return (
    <AuthenticatedLayoutView>{vm.title}</AuthenticatedLayoutView>
  );
};

export default GalleryPageView;