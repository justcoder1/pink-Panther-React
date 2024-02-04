import { Box } from '@mui/material';

export interface UserLoginProps {
  reference?: string;
}

const UserLogin: React.FC<UserLoginProps> = ({ reference }) => {
  return <Box>{reference || 'NavBar'}</Box>;
};

export default UserLogin;
