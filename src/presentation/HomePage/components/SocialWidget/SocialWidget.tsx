import { Stack } from "@mui/material";
import React from "react";
import { HomePageSocialsProps } from "../../pages/use-home-page.view-model";

import "./SocialWidget.css";

interface SocialsProps {
    socials: HomePageSocialsProps[]
}

const SocialWidget: React.FC<SocialsProps> = ({socials}) => {

  return (
    <Stack direction={"row"}>
      {socials.map((s, i) => (
        <a key={`soc_${i}`} href={s.link} rel="noreferrer" target="_blank">{s.icon}</a>
      ))}
    </Stack>
  );
};

export default SocialWidget;
