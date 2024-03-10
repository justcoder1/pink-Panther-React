import { Button, Stack } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";
import { userLogout } from "../../_connections/connections";

type T_Unknown = {
  reference?: string;
};

const Unknown: React.FC<T_Unknown> = ({ reference }) => {
  const navigate = useNavigate();

  const { mutate: onLogout } = useMutation({
    mutationFn: userLogout,
    onSuccess: () => {
      navigate("/");
    },
    onError: (err) => {
      console.error(err);
    },
  });

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
