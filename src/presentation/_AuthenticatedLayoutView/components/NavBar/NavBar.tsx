import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  SwipeableDrawer,
  useMediaQuery,
} from '@mui/material';
import React, { useState } from 'react';
import { FaBars, FaPaw } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import './navBar.css';

export interface NavBarItemsProps {
  _id: string;
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
    <Stack id="navBar-Main" direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
      <NavLink id="navBar-Left" to={'/'}>
        {header}
      </NavLink>
      <Stack id="navBar-Right" direction={'row'} alignItems={'center'}>
        {items.length && !showMobile && <NavFullScreen items={items} />}
        {items.length && showMobile && <NavMobile items={items} />}
        <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to={'/user'}>
          <FaPaw id="pawIcon" />
        </NavLink>
      </Stack>
    </Stack>
  );
};

const NavFullScreen: React.FC<Partial<NavBarProps>> = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <NavLink
          key={`navBarFull_${item.title}`}
          className={({ isActive }) => (isActive ? 'activeLink' : '')}
          to={item.link}
        >
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
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setDrawState(() => open);
  };

  const list = (
    <Box role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)} sx={{ width: 250 }}>
      <List>
        {items.map((item) => (
          <ListItem key={`navBarMob_${item.title}l`} disablePadding>
            <ListItemButton key={`navBarMob_${item.title}b`} component={Link} to={item.link}>
              <ListItemText key={`navBarMob_${item.title}t`} primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Button onClick={toggleDrawer(true)}>
        <FaBars id="barsIcon" />
      </Button>
      <SwipeableDrawer anchor={'right'} open={drawState} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}>
        {list}
      </SwipeableDrawer>
    </>
  );
};

export default NavBar;
