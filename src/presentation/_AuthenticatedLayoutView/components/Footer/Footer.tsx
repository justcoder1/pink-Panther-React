import { Box } from "@mui/material";

export interface FooterProps {
  reference?: string
}

const Footer: React.FC<FooterProps> = ({reference}) => {
  return (
    <Box>
      {reference || 'Footer'}
    </Box>
  );
};

export default Footer;