import { Link, Stack } from '@mui/material';
import React from 'react';
import { FaFacebookF, FaTwitter, FaWikipediaW, FaYoutube } from 'react-icons/fa';
import { I_SocialData } from '../../pages/use-home-page.view-model';

import './Socials.css';

interface I_Social {
  socials: I_SocialData[];
}

const Socials: React.FC<I_Social> = ({ socials }) => {
  return (
    <Stack id="soc_container" direction={'row'}>
      
        {socials?.map((s, i) => (
          <Link key={`soc_${i}`} href={s.link} rel="noreferrer" target="_blank">
            <span className="soc_Icon">
              {s.icon === 'FaFacebookF' ? (
                <FaFacebookF key={`soc_${i}_i`} />
              ) : s.icon === 'FaYoutube' ? (
                <FaYoutube key={`soc_${i}_i`} />
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

export default Socials;
