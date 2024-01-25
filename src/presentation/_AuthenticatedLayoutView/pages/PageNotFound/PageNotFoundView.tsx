import React, { useId } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import logo from "../../../../assets/PP_404.png";
import "./PageNotFoundView.css";

export interface PageNotFoundViewProps {}

const PageNotFoundView: React.FC<PageNotFoundViewProps> = () => {
  return (
    <Stack
      key={`pnf_${useId()}`}
      id="container404"
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <img key={`pnf_${useId()}`} src={logo} className="logo404" alt="PinkPanther" />
      <Box key={`pnf_${useId()}`}>
        <Typography key={`pnf_${useId()}`} variant="h3">404 - PAGE NOT FOUND</Typography>
        <Typography key={`pnf_${useId()}`} variant="h6" id="textH6">The page you are looking for cannot be found.</Typography>
        <Button key={`pnf_${useId()}`} variant="contained" id="homeBTN" component={Link} to="/">HomePage</Button>
      </Box>
    </Stack>
  );
};

export default PageNotFoundView;
