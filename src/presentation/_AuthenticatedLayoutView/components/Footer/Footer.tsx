import { Box, Link } from '@mui/material';
import React from 'react';
import './footer.css';

export interface FooterProps {
  link: string;
  footer: string;
}

const Footer: React.FC<FooterProps> = ({ footer, link }) => {
  return (
    <Box id="footer_box">
      Copyright &copy;{' '}
      <Link href={link} id="footer_a" rel="noreferrer" target="_blank">
        {footer || 'Footer'}
      </Link>
    </Box>
  );
};

export default Footer;
