import { faFacebookF, faTwitter, faWikipediaW, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Stack } from "@mui/material";
import React, { useId } from "react";
import { HomePageSocialsProps } from "../../pages/use-home-page.view-model";

import "./SocialWidget.css";

interface SocialsProps {
  socials: HomePageSocialsProps[];
}

const SocialWidget: React.FC<SocialsProps> = ({ socials }) => {
  return (
    <Stack key={`soc_${useId()}`} id="soc_container" direction={"row"}>
      {socials.length > 0 &&
        socials.map((s, i) => (
          <a key={`soc_${i}`} href={s.link} rel="noreferrer" target="_blank">
            {/* FIX - Brand Icons will not work like the others */}
            <FontAwesomeIcon
              icon={
                s.icon === "faFacebookF"
                  ? faFacebookF
                  : s.icon === "faYoutube"
                  ? faYoutube
                  : s.icon === "faWikipediaW"
                  ? faWikipediaW
                  : faTwitter
              }
              key={`soc_${i}_i`}
              className="soc_Icon"
            />
          </a>
        ))}
    </Stack>
  );
};

export default SocialWidget;
