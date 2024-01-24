import { Box } from "@mui/material";

export interface NavBarProps {
  reference?: string
}

const NavBar: React.FC<NavBarProps> = ({reference}) => {
  return (
    <Box>
      {reference || 'NavBar'}
    </Box>
  );
};

export default NavBar;