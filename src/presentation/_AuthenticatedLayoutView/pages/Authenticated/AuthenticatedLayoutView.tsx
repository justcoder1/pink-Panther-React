import { Box, Stack } from '@mui/material';
import React from 'react';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import useAuthenticatedLayoutViewModel from './use-authenticated-layout.view-model';

export interface AuthenticatedLayoutViewProps {}

const AuthenticatedLayoutView: React.FC<React.PropsWithChildren<AuthenticatedLayoutViewProps>> = ({ children }) => {
  const vm = useAuthenticatedLayoutViewModel();

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateRows: 'auto 1fr auto',
        height: '100dvh',
        maxHeight: '100dvh',
        minHeight: 0,
      }}
    >
      <NavBar header={vm.header} items={vm.headerItems} />
      <Stack justifyContent={'center'}>{children}</Stack>
      <Footer footer={vm.footer} link={vm.footerLink} />
    </Box>
  );
};

export default AuthenticatedLayoutView;
