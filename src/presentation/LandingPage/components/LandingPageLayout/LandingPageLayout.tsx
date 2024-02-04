import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { LandingPageProps } from '../../pages/use-landing-page.view-model';

import './LandingPageLayout.css';
import UserLogin from '../UserLogin/UserLogin';

const LandingPageLayout: React.FC<LandingPageProps> = ({ title, subTitle, landingImage, LoginProps }) => {
  return (
    <Stack justifyContent={'center'} alignItems={'center'} id="landingPage">
      <Box id="landingPageInner">
        <Box id="landingPageLeft">
          <Typography id="lp_h2" variant="h2">
            {title}
          </Typography>
          <Stack alignItems={'end'}>
            <img id="lp_img" src={landingImage} alt="PinkPanther" />
          </Stack>
          <Typography id="lp_h6" variant="h6">
            {subTitle}
          </Typography>
        </Box>
        <UserLogin {...LoginProps} />
      </Box>
    </Stack>
  );
};

export default LandingPageLayout;
