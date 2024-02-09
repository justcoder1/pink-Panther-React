import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

import './AboutPageLayout.css';
import useAboutPageLayoutModel, { IntAboutPageLayout } from './use-about-page-layout.view-model';

const AboutPageLayout: React.FC = () => {
  const vm: IntAboutPageLayout = useAboutPageLayoutModel();

  return (
    <Stack justifyContent={'center'} alignItems={'center'}>
      <Box maxWidth={1000} margin={10} sx={{ textAlign: 'center' }}>
        <Typography variant="h2" id="about_h2">
          {vm.title}
        </Typography>
        <Typography variant="h3" id="about_h3">
          {vm.subTitle}
        </Typography>
        <Typography>{vm.contents}</Typography>
      </Box>
    </Stack>
  );
};

export default AboutPageLayout;
