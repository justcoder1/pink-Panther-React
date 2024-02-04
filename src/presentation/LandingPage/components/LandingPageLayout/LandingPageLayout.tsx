import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { LandingPageProps } from '../../pages/use-landing-page.view-model';

import './LandingPageLayout.css';

const LandingPageLayout: React.FC<LandingPageProps> = ({title, landingImage}) => {
  return (
    <Stack justifyContent={'center'} alignItems={'center'} id='landingPage'>
      <Box id='landingPageInner'>
      <Typography id="hpl_h3" variant="h3">
        {title}
      </Typography>
      </Box>
    </Stack>
  );
};

export default LandingPageLayout;
