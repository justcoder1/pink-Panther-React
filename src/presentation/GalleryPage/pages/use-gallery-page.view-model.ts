import { useQuery } from "@tanstack/react-query";
import { useErrorHandler } from "react-error-boundary";
import { useIntl } from "react-intl";
import { ViewModelHook } from "../../../_utils/types/index";
import { getPictures } from "../_connections/connections";

export interface GalleryViewModel {
  title: string;
}

const useGalleryViewModel: ViewModelHook<GalleryViewModel> = () => {
  const handleError = useErrorHandler();
  const intl = useIntl();

  // API data
  const { status, data: picturesData } = useQuery({
    queryKey: ["pictures"],
    queryFn: getPictures,
  });

  console.log(status, picturesData);
  

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
