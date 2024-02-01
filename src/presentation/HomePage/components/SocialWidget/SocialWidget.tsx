import { Link, Stack } from '@mui/material';
import React, { useId } from 'react';
import { HomePageSocialsProps } from '../../pages/use-home-page.view-model';
import { FaWikipediaW, FaYoutube, FaTwitter, FaFacebookF } from 'react-icons/fa';

import './SocialWidget.css';

interface SocialsProps {
  socials: HomePageSocialsProps[];
}

const SocialWidget: React.FC<SocialsProps> = ({ socials }) => {
  return (
    <Stack key={`soc_${useId()}`} id="soc_container" direction={'row'}>
      {socials.length > 0 &&
        socials.map((s, i) => (
          <Link key={`soc_${i}`} href={s.link} rel="noreferrer" target="_blank">
            <span className="soc_Icon">
              {s.icon === 'FaFacebookF' ? (
                <FaFacebookF key={`soc_${i}_i`} />
              ) : s.icon === 'FaYoutube' ? (
                <FaYoutube key={`soc_${i}_i`}  />
              ) : s.icon === 'FaWikipediaW' ? (
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

export default SocialWidget;
