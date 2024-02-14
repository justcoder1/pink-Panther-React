import { useIntl } from "react-intl";
import { useIntlCommon } from "../../../_utils/lang/intl-common";
import { type ViewModelHook } from "../../../_utils/types/index";
import imageDesktop from "../../../assets/PP_MainImage.png";
import imageMobile from "../../../assets/PP_MainImage_Small.png";

export interface IntHomePageModel {
  titleOne: string;
  titleTwo: string;
  imageDesktop: string;
  imageMobile: string;
}

const useHomePageModel: ViewModelHook<IntHomePageModel> = () => {
  const intl = useIntl();
  const { siteLabel } = useIntlCommon();

  try {
    const titleOne = intl.formatMessage({
      id: "title.one",
      description: "HomePage title One",
      defaultMessage: "Site about the history of",
    });

    return {
      titleOne,
      titleTwo: siteLabel,
      imageDesktop,
      imageMobile,
    };
  } catch (error) {
    return error;
  }
};

export default useHomePageModel;
