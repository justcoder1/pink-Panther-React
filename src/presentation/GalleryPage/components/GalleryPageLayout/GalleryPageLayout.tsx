import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { GalleryProps } from '../../pages/use-gallery-page.view-model';

import './GalleryPageLayout.css';

const GalleryPageLayout: React.FC<GalleryProps> = ({ title, pictures, videos }) => {
  return (
    <Stack justifyContent={'center'} alignItems={'center'}>
      <Box maxWidth={1000} margin={10} sx={{ textAlign: 'center' }}>
        <Typography variant="h2" id="history_h2">
          {title}
        </Typography>
        <img src={pictures[0].url} alt={pictures[0].title} className="galleryPicture" />
      </Box>
    </Stack>
  );
};

export default GalleryPageLayout;
