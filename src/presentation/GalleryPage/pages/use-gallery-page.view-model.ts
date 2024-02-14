import { useIntl } from "react-intl";

import { type ViewModelHook } from "../../../_utils/types/index";

export interface IntGalleryModel {
  title: string;
}

const useGalleryModel: ViewModelHook<IntGalleryModel> = () => {
  const intl = useIntl();

  try {
    const title = intl.formatMessage({ id: "title", defaultMessage: "Gallery Page - State Management" });

    return {
      title,
    };
  } catch (error) {
    return error;
  }
};

export default useGalleryModel;
