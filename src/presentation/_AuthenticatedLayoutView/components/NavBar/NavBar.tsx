import { Box, Typography } from "@mui/material";
import { NavLink } from 'react-router-dom';
import './navBar.css'

export interface NavBarItemsProps {
  title: string;
  link: string;
}

export interface NavBarProps {
  header: string;
  items: NavBarItemsProps[];
}

const NavBar: React.FC<NavBarProps> = ({header, items}) => {
  return (
    <Box>
      <Typography variant="h1">{header}</Typography>
      {items && (
        items.map((item) => (
          <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to={item.link}>
              {item.title}
          </NavLink>
        ))
      )}
    </Box>
  );
};

export default NavBar;