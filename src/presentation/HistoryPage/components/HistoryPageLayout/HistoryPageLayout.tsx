import { Box, Stack, Typography } from "@mui/material";
import React, { useId } from "react";
import { HistoryProps } from "../../pages/use-history-page.view-model";

import "./HistoryPageLayout.css";

const HistoryPageLayout: React.FC<HistoryProps> = ({ title, content }) => {
  console.log(content);  
  return (
    <Stack key={`about_${useId()}`} justifyContent={"center"} alignItems={"center"}>
      <Box key={`about_${useId()}`} maxWidth={1000} margin={10} sx={{textAlign: 'center'}}>
        <Typography key={`about_${useId()}`} variant="h2" id='about_h2'>
          {title}
        </Typography>
        <Typography key={`about_${useId()}`} variant="h3" id='about_h3'>{content.title}</Typography>
        {/* <Typography key={`about_${useId()}`}>{contents}</Typography> */}
      </Box>
    </Stack>
  );
};

export default HistoryPageLayout;