import { Stack } from "@mui/material";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorHandler, SkeletonNavBar } from "../../../../_utils/globals/components/Fallbacks/Fallbacks";

import "./navBar.css";
import { NavBarItems } from "./NavBarItems";

const NavBar: React.FC = () => {
  return (
    <Stack id="navBar-Main" direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
      <ErrorBoundary fallback={<ErrorHandler />}>
        <Suspense fallback={<SkeletonNavBar />}>
          <NavBarItems />
        </Suspense>
      </ErrorBoundary>
    </Stack>
  );
};

export default NavBar;
