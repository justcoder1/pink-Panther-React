import PetsIcon from "@mui/icons-material/Pets";
import MenuIcon from '@mui/icons-material/Menu';
import { Stack, useMediaQuery } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./navBar.css";

export interface NavBarItemsProps {
  title: string;
  link: string;
}

export interface NavBarProps {
  header: string;
  items: NavBarItemsProps[];
}

const NavBar: React.FC<NavBarProps> = ({ header, items }) => {
  const showMobile = useMediaQuery('(max-width: 900px)');

  return (
    <Stack id="navBar-Main" direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
      <NavLink id="navBar-Left" to={"/"}>
        {header}
      </NavLink>
      <Stack id="navBar-Right" direction={"row"} alignItems={"center"}>
        {items && !showMobile && <NavFullScreen items={items} />}
        {items && showMobile && <NavMobile items={items} />}
        <NavLink className={({ isActive }) => (isActive ? "activeLink" : "")} to={"/user"}>
          <PetsIcon id="pawIcon" />
        </NavLink>
      </Stack>
    </Stack>
  );
};

export const NavFullScreen: React.FC<Partial<NavBarProps>> = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <NavLink className={({ isActive }) => (isActive ? "activeLink" : "")} to={item.link}>
          {item.title}
        </NavLink>
      ))}
    </>
  );
};

const NavMobile: React.FC<Partial<NavBarProps>> = ({ items }) => {
  return (
    <>
      {/* {items.map((item) => (
        <NavLink className={({ isActive }) => (isActive ? "activeLink" : "")} to={item.link}>
          {item.title}
        </NavLink>
      ))} */}
      <MenuIcon id='barsIcon' />
    </>
  );
};

export default NavBar;
