import { type T_NavBarItem } from "../components/NavBar/use-navbar.view-model";
import { DB_API } from "../../../_utils/hooks/functions";

export const getNavBar = async (): Promise<T_NavBarItem[]> => {
  return await DB_API.get("/pinkpanther/navBar").then((res) => res.data.data);
};
