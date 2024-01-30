import React, { useId } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { GalleryProps } from '../../pages/use-gallery-page.view-model';

import './GalleryPageLayout.css';

const GalleryPageLayout: React.FC<GalleryProps> = ({ title, pictures, videos }) => {
  return (
    <Stack key={`history_${useId()}`} justifyContent={'center'} alignItems={'center'}>
      <Box key={`history_${useId()}`} maxWidth={1000} margin={10} sx={{ textAlign: 'center' }}>
        <Typography key={`history_${useId()}`} variant="h2" id="history_h2">
          {title}
        </Typography>
        <img src={pictures[0].url} alt={pictures[0].title} className='galleryPicture'/>
      </Box>
    </Stack>
  );
};

export default GalleryPageLayout;
