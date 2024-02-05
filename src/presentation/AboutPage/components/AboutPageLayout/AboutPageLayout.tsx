import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { I_AboutModel } from '../../pages/use-about-page.view-model';

import './AboutPageLayout.css';

const AboutPageLayout: React.FC<I_AboutModel> = ({ title, subTitle, contents }) => {
  return (
    <Stack justifyContent={'center'} alignItems={'center'}>
      <Box maxWidth={1000} margin={10} sx={{ textAlign: 'center' }}>
        <Typography variant="h2" id="about_h2">
          {title}
        </Typography>
        <Typography variant="h3" id="about_h3">
          {subTitle}
        </Typography>
        <Typography>{contents}</Typography>
      </Box>
    </Stack>
  );
};

export default AboutPageLayout;
