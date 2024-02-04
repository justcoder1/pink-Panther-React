import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { LandingPageProps } from '../../pages/use-landing-page.view-model';

import './LandingPageLayout.css';
import UserLogin from '../UserLogin/UserLogin';

const LandingPageLayout: React.FC<LandingPageProps> = ({ title, subTitle, landingImage, LoginProps }) => {
  return (
    <Stack justifyContent={'center'} alignItems={'center'} id="landingPage">
      <Box id="landingPageInner">
        <Stack alignItems={'center'} id='landingPageLeft'>
          <Typography id="lp_h2" variant="h2">
            {title}
          </Typography>
          <img id="lp_img" src={landingImage} alt="PinkPanther" />
          <Typography id="lp_h5" variant="h5">
            {subTitle}
          </Typography>
        </Stack>
        <UserLogin {...LoginProps} />
      </Box>
    </Stack>
  );
};

export default LandingPageLayout;
