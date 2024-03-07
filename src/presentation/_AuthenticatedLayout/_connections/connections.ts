import { type T_NavBarItem } from "../components/NavBar/use-navbar.view-model";
import { DB_API } from "../../../_utils/http/paths";

export const getNavBar = async (): Promise<T_NavBarItem[]> => {
  return await DB_API.get("/navBar", { withCredentials: true }).then((res) => res.data.data);
};
