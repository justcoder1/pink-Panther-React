import { Box } from "@mui/material";

export interface UnknownProps {
  reference?: string
}

const Unknown: React.FC<UnknownProps> = ({reference}) => {
  return (
    <Box>
      {reference || 'NavBar'}
    </Box>
  );
};

export default Unknown;