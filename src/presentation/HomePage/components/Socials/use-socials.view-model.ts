import { useSuspenseQuery } from "@tanstack/react-query";
import { useErrorHandler } from "react-error-boundary";

import { ViewModelHook } from "../../../../_utils/types/index";
import { getSocials } from "../../_connections/connections";

export interface IntSocialData {
  _id: string;
  social?: string;
  icon: string;
  link: string;
}

export interface IntSocialsModel {
  socials: IntSocialData[];
}

const useSocialsModel: ViewModelHook<IntSocialsModel> = () => {
  const handleError = useErrorHandler();

  // API data
  const { data: socialsData } = useSuspenseQuery({
    queryKey: ["socials"],
    queryFn: getSocials,
  });

  try {
    return {
      socials: socialsData,
    };
  } catch (error) {
    handleError(error);
  }
};

export default useSocialsModel;
