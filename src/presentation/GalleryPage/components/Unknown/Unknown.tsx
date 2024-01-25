import React, { useId } from "react";
import { Box } from "@mui/material";

export interface UnknownProps {
  reference?: string
}

const Unknown: React.FC<UnknownProps> = ({reference}) => {  
  return (
    <Box key={`unknown_${useId()}`}>
      {reference || 'NavBar'}
    </Box>
  );
};

export default Unknown;