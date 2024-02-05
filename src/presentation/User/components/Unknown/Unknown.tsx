import { Box } from '@mui/material';

interface I_Unknown {
  reference?: string;
}

const Unknown: React.FC<I_Unknown> = ({ reference }) => {
  return <Box>{reference || 'NavBar'}</Box>;
};

export default Unknown;
