import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/PP_404.png';
import './PageNotFoundView.css';

export interface PageNotFoundViewProps {}

const PageNotFoundView: React.FC<PageNotFoundViewProps> = () => {
  return (
    <Stack id="pnf_stack" direction={'row'} alignItems={'center'} justifyContent={'center'}>
      <img id="pnf_img" src={logo} alt="PinkPanther" />
      <Box>
        <Typography id="pnf_h3" variant="h3">
          404 - PAGE NOT FOUND
        </Typography>
        <Typography id="pnf_h6" variant="h6">
          The page you are looking for cannot be found.
        </Typography>
        <Button variant="contained" id="pnf_btn" component={Link} to="/">
          HomePage
        </Button>
      </Box>
    </Stack>
  );
};

export default PageNotFoundView;
