import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';

import logo from '../../../../assets/PP_404.png';
import './PageNotFoundView.css';

interface I_PageNotFound {}

const PageNotFoundView: React.FC<I_PageNotFound> = () => {
  const intl = useIntl();
  const header: string = intl.formatMessage({ id: 'header', defaultMessage: `404 - PAGE NOT FOUND`});
  const message: string = intl.formatMessage({ id: 'message', defaultMessage: `The page you are looking for cannot be found.`});
  const button: string = intl.formatMessage({ id: 'button', defaultMessage: `HomePage`});

  return (
    <Stack id="pnf_stack" direction={'row'} alignItems={'center'} justifyContent={'center'}>
      <img id="pnf_img" src={logo} alt="PinkPanther" />
      <Box>
        <Typography id="pnf_h3" variant="h3">
          {header}
        </Typography>
        <Typography id="pnf_h6" variant="h6">
          {message}
        </Typography>
        <Button variant="contained" id="pnf_btn" component={Link} to="/">
          {button}
        </Button>
      </Box>
    </Stack>
  );
};

export default PageNotFoundView;
