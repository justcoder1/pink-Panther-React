import MenuIcon from "@mui/icons-material/Menu";
import PetsIcon from "@mui/icons-material/Pets";
import { Box, Button, List, ListItem, ListItemButton, ListItemText, Stack, SwipeableDrawer, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
  const showMobile = useMediaQuery("(max-width: 900px)");

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
        <NavLink key={`nav${item}`} className={({ isActive }) => (isActive ? "activeLink" : "")} to={item.link}>
          {item.title}
        </NavLink>
      ))}
    </>
  );
};

const NavMobile: React.FC<Partial<NavBarProps>> = ({ items }) => {
  const [drawState, setDrawState] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setDrawState(() => open);
  };

  const list = 
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {items.map((item) => (
          <ListItem key={`nav${item}`} disablePadding>
             <ListItemButton component={Link} to={item.link}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>

  return (
    <>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon id="barsIcon" />
      </Button>
      <SwipeableDrawer
        anchor={"right"}
        open={drawState}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list}
      </SwipeableDrawer>
    </>
  );
};

export default NavBar;
