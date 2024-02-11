import { Box, Stack } from "@mui/material";
import React from "react";

import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import useAuthenticatedLayoutModel from "./use-authenticated-layout.view-model";

interface IntAuthenticatedLayout {}

const AuthenticatedLayout: React.FC<React.PropsWithChildren<IntAuthenticatedLayout>> = ({ children }) => {
  const vm = useAuthenticatedLayoutModel();

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
        height: "100dvh",
        maxHeight: "100dvh",
        minHeight: 0,
      }}
    >
      <NavBar />
      <Stack justifyContent={"center"}>{children}</Stack>
      <Footer footer={vm.footer} link={vm.footerLink} />
    </Box>
  );
};

export default AuthenticatedLayout;
