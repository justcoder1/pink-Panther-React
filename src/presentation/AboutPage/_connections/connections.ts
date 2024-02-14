import { DB_API } from "../../../_utils/hooks/functions";
import { type T_AboutPageLayout } from "../components/AboutPageLayout/use-about-page-layout.view-model";

export const getAbout = async (): Promise<T_AboutPageLayout> => {
  return await DB_API.get("/pinkpanther/wikipedia/about").then((res) => res.data.data);
};
