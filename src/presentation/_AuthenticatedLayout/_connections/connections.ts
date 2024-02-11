import { IntNavBarItem } from "../components/NavBar/use-navbar.view-model";
import { DB_API } from "../../../_utils/hooks/functions";

export const getNavBar = async (): Promise<IntNavBarItem[]> => {
  return DB_API.get("/pinkpanther/navBar").then((res) => res.data.data);
};
