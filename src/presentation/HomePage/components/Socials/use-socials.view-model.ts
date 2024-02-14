import { useSuspenseQuery } from "@tanstack/react-query";

import { type ViewModelHook } from "../../../../_utils/types/index";
import { getSocials } from "../../_connections/connections";

export type T_SocialData = {
  _id: string;
  social?: string;
  icon: string;
  link: string;
};

export type T_SocialsModel = {
  socials: T_SocialData[];
};

const useSocialsModel: ViewModelHook<T_SocialsModel> = () => {
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
