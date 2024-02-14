import { useSuspenseQuery } from "@tanstack/react-query";

import { type ViewModelHook } from "../../../../_utils/types/index";
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
    return error;
  }
};

export default useSocialsModel;
