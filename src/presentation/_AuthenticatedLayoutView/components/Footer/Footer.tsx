import React, { useId } from "react";
import { Box } from "@mui/material";
import './footer.css'

export interface FooterProps {
  link: string;
  footer: string
}

const Footer: React.FC<FooterProps> = ({footer, link}) => {
  return (
    <Box key={`footer_${useId()}`} id='footer_box'>
      Copyright &copy; <a href={link} id='footer_a' rel="noreferrer" target="_blank">{footer || 'Footer'}</a> 
    </Box>
  );
};

export default Footer;