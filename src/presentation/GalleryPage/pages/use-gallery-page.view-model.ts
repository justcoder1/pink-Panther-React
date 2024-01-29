import { useQuery } from "@tanstack/react-query";
import { useErrorHandler } from "react-error-boundary";
import { useIntl } from "react-intl";
import { ViewModelHook } from "../../../_utils/types/index";
import { getPictures, getVideos } from "../_connections/connections";

export interface GalleryViewModel {
  title: string;
}

const useGalleryViewModel: ViewModelHook<GalleryViewModel> = () => {
  const handleError = useErrorHandler();
  const intl = useIntl();

  // API data
  const { status: pictureStatus, data: picturesData } = useQuery({
    queryKey: ["pictures"],
    queryFn: getPictures,
  });

  const { status: videoStatus, data: videosData } = useQuery({
    queryKey: ["videos"],
    queryFn: getVideos,
  });

  console.log(pictureStatus, picturesData);
  console.log(videoStatus, videosData);
  

  try {
    const title = intl.formatMessage({
      id: "title",
      description: "page title",
      defaultMessage: "Gallery",
    });

    return {
      title,
    };
  } catch (error) {
    handleError(error);
  }
};

export default useGalleryViewModel;
