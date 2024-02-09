import { Box } from '@mui/material';

interface IntUnknown {
  reference?: string;
}

const Unknown: React.FC<IntUnknown> = ({ reference }) => {
  return <Box>{reference || 'NavBar'}</Box>;
};

export default Unknown;
