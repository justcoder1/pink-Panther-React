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

import useNavBarViewModel from './use-navbar.view-model';
import { I_NavBar } from './use-navbar.view-model';

export const NavBarItems: React.FC = () => {
  const vm: I_NavBar = useNavBarViewModel();
  const showMobile = useMediaQuery('(max-width: 900px)');

  return (
    <>
      <NavLink id="navBar-Left" to={'/'}>
        {vm.header}
      </NavLink>
      <Stack id="navBar-Right" direction={'row'} alignItems={'center'}>
        {!showMobile && <NavFullScreen headerItems={vm.headerItems} />}
        {showMobile && <NavMobile headerItems={vm.headerItems} />}
        <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to={'/user'}>
          <FaPaw id="pawIcon" />
        </NavLink>
      </Stack>
    </>
  );
};

const NavFullScreen: React.FC<Partial<I_NavBar>> = ({ headerItems }) => {
  return (
    <>
      {headerItems?.map((item) => (
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

const NavMobile: React.FC<Partial<I_NavBar>> = ({ headerItems }) => {
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
        {headerItems?.map((item) => (
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

export default NavBarItems;
