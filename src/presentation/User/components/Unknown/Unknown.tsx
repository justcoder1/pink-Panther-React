import React from "react";
import { Box } from "@mui/material";

type T_Unknown = {
  reference?: string;
};

const Unknown: React.FC<T_Unknown> = ({ reference }) => {
  return <Box>{reference || "NavBar"}</Box>;
};

export default Unknown;
