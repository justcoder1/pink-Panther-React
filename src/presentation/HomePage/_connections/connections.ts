import { DB_API } from "../../../_utils/hooks/functions";
import { IntSocialData } from "../components/Socials/use-socials.view-model";

export const getSocials = async (): Promise<IntSocialData[]> => {
  return DB_API.get("/pinkpanther/socials").then((res) => res.data.data);
};
