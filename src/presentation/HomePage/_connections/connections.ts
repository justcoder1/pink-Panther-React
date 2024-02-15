import { DB_API } from "../../../_utils/http/paths";
import { type T_SocialData } from "../components/Socials/use-socials.view-model";

export const getSocials = async (): Promise<T_SocialData[]> => {
  return await DB_API.get("/pinkpanther/socials").then((res) => res.data.data);
};
