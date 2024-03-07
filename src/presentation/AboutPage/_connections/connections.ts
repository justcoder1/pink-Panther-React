import { DB_API } from "../../../_utils/http/paths";
import { type T_AboutPageLayout } from "../components/AboutPageLayout/use-about-page-layout.view-model";

export const getAbout = async (): Promise<T_AboutPageLayout> => {
  return await DB_API.get("/wikipedia/about", { withCredentials: true }).then((res) => res.data.data);
};
