import React, { useId } from "react";
import { Box } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import useAuthenticatedLayoutViewModel from "./use-authenticated-layout.view-model";

export interface AuthenticatedLayoutViewProps {}

const AuthenticatedLayoutView: React.FC<React.PropsWithChildren<AuthenticatedLayoutViewProps>> = ({ children }) => {
  const vm = useAuthenticatedLayoutViewModel();

  return (
    <Box
      key={`auth_${useId()}`}
      sx={{
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
        height: "100dvh",
      }}
    >
      <NavBar header={vm.header} items={vm.headerItems} />
      {children}
      <Footer footer={vm.footer} link={vm.footerLink} />
    </Box>
  );
};

export default AuthenticatedLayoutView;
