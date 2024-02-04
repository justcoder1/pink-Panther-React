import { Box } from '@mui/material';

import { UserLoginProps } from '../../pages/use-landing-page.view-model';

const UserLogin: React.FC<UserLoginProps> = ({ title, email, password, loginLabel, createText, registerLabel, onCreateClick, onLoginClick }) => {
  return <Box>{title}</Box>;
};

export default UserLogin;
