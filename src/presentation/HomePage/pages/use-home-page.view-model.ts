import { useQuery } from "@tanstack/react-query";
import { useErrorHandler } from "react-error-boundary";
import { useIntl } from "react-intl";
import { useIntlCommon } from "../../../_utils/lang/intl-common";
import { ViewModelHook } from "../../../_utils/types/index";
import imageDesktop from "../../../assets/PP_MainImage.png";
import imageMobile from "../../../assets/PP_MainImage_Small.png";
import { getSocials } from "../_connections/connections";

export interface HomePageSocialsProps {
  icon: string;
  link: string;
}

export interface HomePageLayoutProps {
  titleOne: string;
  titleTwo: string;
  imageDesktop: string;
  imageMobile: string;
  socials: HomePageSocialsProps[];
}

const useHomePageViewModel: ViewModelHook<HomePageLayoutProps> = () => {
  const handleError = useErrorHandler();
  const intl = useIntl();
  const { siteLabel } = useIntlCommon();

  // API data
  const {data: socialsData} = useQuery({
    queryKey: ["socials"],
    queryFn: getSocials,
  });
  

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
      socials: socialsData || [],
    };
  } catch (error) {
    handleError(error);
  }
};

export default useHomePageViewModel;
