import { Box, Button, Stack, Typography } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { I_GalleryModel } from '../../pages/use-gallery-page.view-model';
import GalleryCarousel from '../GalleryCarousel/GalleryCarousel';
import './GalleryPageLayout.css';

const GalleryPageLayout: React.FC<I_GalleryModel> = ({ title, pictures, videos }) => {
  const [imageType, setImageType] = useState(
    `${window.location.href.substring(window.location.href.lastIndexOf('/') + 1)}`
  );
  const [imageId, setImageId] = useState(0);
  const [imageMaxId, setImageMaxId] = useState(0);
  const [imageDetails, setImageDetails] = useState(null);

  const navigate = useNavigate();

  const updateDetails = (images) => {
    setImageDetails({
      title: images.title,
      image: images.url,
      imageId: images.id,
    });
  };

  const handleNextButton = useCallback(() => {
    if (pictures.length) {
      setImageId(imageMaxId < 0 ? 0 : imageId + 1 > imageMaxId ? 0 : imageId + 1);
      updateDetails({ ...(imageType === 'picture' ? pictures[imageId] : videos[imageId]), id: imageId + 1 });
    } else {
      setImageMaxId(imageMaxId - 1);
    }
  }, [imageId, imageMaxId]);

  const handleBackButton = () => {    
    setImageId(imageId - 1 < 0 ? imageMaxId : imageId - 1);
    updateDetails({ ...(imageType === 'picture' ? pictures[imageId] : videos[imageId]), id: imageId + 1 });
  };

  const handleRoute = () => {
    const address = imageType === 'picture' ? 'video' : 'picture';
    setImageType(address);
    setImageId(0);
    setImageMaxId(0);
    setImageDetails(null);
    navigate(`/gallery/${address}`);
  };

  useEffect(() => {
    setImageMaxId((imageType === 'picture' ? pictures.length : videos.length) - 1);
    if (imageType === 'picture') {
      const interval = setTimeout(
        () => {
          handleNextButton();
        },
        imageDetails ? 2000 : 0
      );
      return () => clearTimeout(interval);
    } else {
      const interval = setTimeout(
        () => {
          handleNextButton();
        },
        imageDetails ? 100000000 : 0
      );      
      return () => clearTimeout(interval);
    }
  }, [handleNextButton]);

  return (
    <Stack justifyContent={'center'} alignItems={'center'}>
      <Box maxWidth={1200} margin={1} sx={{ textAlign: 'center' }}>
        <Stack direction={'row'} justifyContent={'end'}>
          <Button color="secondary" variant="contained" onClick={handleRoute}>{`Show ${
            imageType === 'picture' ? 'Videos' : 'Pictures'
          }`}</Button>
        </Stack>
        <Typography variant="h2" id="history_h2">
          {title}
        </Typography>
        {imageDetails ? (
          <>
            <Typography variant="h3" id="history_h3">
              {imageDetails.title}
            </Typography>
            <GalleryCarousel
              type={imageType}
              title={imageDetails.title}
              image={imageDetails.image}
              nextButton={handleNextButton}
              backButton={handleBackButton}
            />
            <Typography variant="h5" id="history_h5">
              {`${imageType} Number ${imageDetails.imageId}`}
            </Typography>
          </>
        ) : (
          <Typography>Loading....</Typography>
        )}
      </Box>
    </Stack>
  );
};

export default GalleryPageLayout;
