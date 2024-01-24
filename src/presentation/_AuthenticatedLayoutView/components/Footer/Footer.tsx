import { Box } from "@mui/material";
import './footer.css'

export interface FooterProps {
  link: string;
  footer: string
}

const Footer: React.FC<FooterProps> = ({footer, link}) => {
  return (
    <Box id='footer'>
      Copyright &copy; <a href={link} rel="noreferrer" target="_blank">{footer || 'Footer'}</a> 
    </Box>
  );
};

export default Footer;