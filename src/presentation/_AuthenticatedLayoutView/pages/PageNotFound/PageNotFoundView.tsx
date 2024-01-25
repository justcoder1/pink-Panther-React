import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import logo from "../../../../assets/PP_404.png";
import "./PageNotFoundView.css";

export interface PageNotFoundViewProps {}

const PageNotFoundView: React.FC<PageNotFoundViewProps> = () => {
  return (
    <Stack
      id="container404"
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <img src={logo} className="logo404" alt="PinkPanther" />
      <Box>
        <Typography variant="h3">404 - PAGE NOT FOUND</Typography>
        <Typography variant="h6" id="textH6">The page you are looking for cannot be found.</Typography>
        <Button variant="contained" id="homeBTN" component={Link} to="/">HomePage</Button>
      </Box>
    </Stack>
  );
};

export default PageNotFoundView;
