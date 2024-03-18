import { Button, Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

type T_Unknown = {
  reference?: string;
};

const Unknown: React.FC<T_Unknown> = ({ reference }) => {
  const navigate = useNavigate();

  const onLogout = (): void => {
    navigate("/login");
  };

  return (
    <Stack>
      {reference || "NavBar"}
      <Button
        color="secondary"
        variant="contained"
        onClick={() => {
          onLogout();
        }}
        sx={{ width: 300 }}
      >
        Logout
      </Button>
    </Stack>
  );
};

export default Unknown;
