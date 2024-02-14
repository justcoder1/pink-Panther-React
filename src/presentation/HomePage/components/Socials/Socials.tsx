import { Link, Stack } from "@mui/material";
import React from "react";
import { FaFacebookF, FaTwitter, FaWikipediaW, FaYoutube } from "react-icons/fa";

import "./Socials.css";
import useSocialsModel, { type IntSocialsModel } from "./use-socials.view-model";

const Socials: React.FC = () => {
  const vm: IntSocialsModel = useSocialsModel();

  return (
    <Stack id="soc_container" direction={"row"}>
      {vm.socials?.map((s, i) => (
        <Link key={`soc_${i}`} href={s.link} rel="noreferrer" target="_blank">
          <span className="soc_Icon">
            {s.icon === "FaFacebookF" ? (
              <FaFacebookF key={`soc_${i}_i`} />
            ) : s.icon === "FaYoutube" ? (
              <FaYoutube key={`soc_${i}_i`} />
            ) : s.icon === "FaWikipediaW" ? (
              <FaWikipediaW key={`soc_${i}_i`} />
            ) : (
              <FaTwitter key={`soc_${i}_i`} />
            )}
          </span>
        </Link>
      ))}
    </Stack>
  );
};

export default Socials;
