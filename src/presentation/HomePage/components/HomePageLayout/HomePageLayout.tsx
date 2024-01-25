import React, { useId } from "react";
import { Stack, Typography, useMediaQuery } from "@mui/material";
import { HomePageLayoutProps } from "../../pages/use-home-page.view-model";
import AudioWidget from "../AudioWidget/AudioWidget";

import './HomePageLayout.css';



const HomePageLayout: React.FC<HomePageLayoutProps> = (props) => {
  const {titleOne, titleTwo, imageDesktop, imageMobile} = props
  const showMobile = useMediaQuery("(max-width: 900px)");

  return (
    <Stack justifyContent={'center'} alignItems={'center'}>
      <Typography key={`hpl_${useId()}`} variant="h2">{titleOne}</Typography>
      <Typography key={`hpl_${useId()}`} variant="h2">{titleTwo}</Typography>
      <img key={`hpl_${useId()}`} src={showMobile ? imageMobile : imageDesktop} alt={titleTwo}/>
      {/* <Stack direction={'row'}>
        {socials.map((s) => (
          <a href="" target="_blank"></a>
        ))}
      </Stack> */}
      <AudioWidget />
    </Stack>
  );
};

export default HomePageLayout;