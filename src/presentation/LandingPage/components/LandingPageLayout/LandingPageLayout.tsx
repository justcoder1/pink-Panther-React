import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { type T_LandingPageModel } from "../../pages/use-landing-page.view-model";

import "./LandingPageLayout.css";
import UserLogin from "../UserLogin/UserLogin";

const LandingPageLayout: React.FC<T_LandingPageModel> = ({ title, subTitle, landingImage, LoginData }) => {
  return (
    <Stack justifyContent={"center"} alignItems={"center"} id="landingPage">
      <Box id="landingPageInner">
        <Box id="landingPageLeft">
          <Typography id="lp_h2" variant="h2">
            {title}
          </Typography>
          <Stack alignItems={"end"}>
            <img id="lp_img" src={landingImage} alt="PinkPanther" />
          </Stack>
          <Typography id="lp_h6" variant="h6">
            {subTitle}
          </Typography>
        </Box>
        <UserLogin {...LoginData} />
      </Box>
    </Stack>
  );
};

export default LandingPageLayout;
