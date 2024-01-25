import { Stack, Typography, useMediaQuery } from "@mui/material";
import React, { useId } from "react";
import { HomePageLayoutProps } from "../../pages/use-home-page.view-model";
import AudioWidget from "../AudioWidget/AudioWidget";
import SocialWidget from "../SocialWidget/SocialWidget";

import "./HomePageLayout.css";

const HomePageLayout: React.FC<HomePageLayoutProps> = (props) => {
  const { titleOne, titleTwo, imageDesktop, imageMobile, socials } = props;
  const showMobile = useMediaQuery("(max-width: 900px)");

  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      <Typography key={`hpl_${useId()}`} id="hpl_h3" variant="h3">
        {titleOne}
      </Typography>
      <Typography key={`hpl_${useId()}`} id="hpl_h1" variant="h1">
        {titleTwo}
      </Typography>
      <img key={`hpl_${useId()}`} id="hpl_img" src={showMobile ? imageMobile : imageDesktop} alt={titleTwo} />
      <SocialWidget socials={socials} />
      <AudioWidget />
    </Stack>
  );
};

export default HomePageLayout;
