import { Stack } from "@mui/material";
import { NavLink } from 'react-router-dom';
import PetsIcon from '@mui/icons-material/Pets';
import './navBar.css';

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
    <Stack id="navBar-Main" direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
      <NavLink id="navBar-Left" to={'/home'}>{header}</NavLink>
      {items && (
        <Stack id="navBar-Right" direction={'row'} alignItems={'center'}>
          {items.map((item) => (
            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to={item.link}>
                {item.title}
            </NavLink>
          ))}
            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to={'/user'}>
              <PetsIcon id='pawIcon'/>
            </NavLink>
        </Stack>
      )}
    </Stack>
  );
};

export default NavBar;