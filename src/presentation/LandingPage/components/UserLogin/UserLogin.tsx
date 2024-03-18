import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Link, TextField, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import YupPassword from "yup-password";

import { setGlobals } from "../../../../_utils/hooks/functions";
import type { T_Response, T_ResponseUser } from "../../../../_utils/types";
import { login } from "../../_connections/connections";
import type { T_LoginData, T_UserForm } from "../../pages/use-landing-page.view-model";

const UserLogin: React.FC<T_UserForm> = ({
  emailLabel,
  passwordLabel,
  titleLabel,
  mainLabel,
  guestLabel,
  createText,
  forgotText,
  registerLabel,
  forgotLabel,
  onRegisterClick,
  onForgotClick,
}) => {
  const navigate = useNavigate();
  YupPassword(yup);
  const inputFull = { width: "100%", margin: "10px 0px" };

  // form Schema ----------------
  const loginSchema = yup
    .object({
      emailAddress: yup.string().email().required("Missing Email"),
      password: yup.string().password().required("Missing Password"),
    })
    .required();

  // form setup ----------------
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  // ----------------------------

  const onSubmit = (data: T_LoginData): void => {
    onLoginClick(data);
  };

  const { mutate: onLoginClick } = useMutation({
    mutationFn: async (data: T_LoginData): Promise<T_Response> => await login(data),
    onSuccess: (res) => {
      setGlobals(res.data as T_ResponseUser);
      navigate("/home");
    },
    onError: (err) => {
      console.error(err);
    },
  });

  return (
    <Box id="landingPageRight">
      <Typography id="lpr_h5" variant="h5" sx={{ marginBottom: "20px" }}>
        {titleLabel}
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          style={inputFull}
          type="email"
          label={emailLabel}
          variant="outlined"
          autoFocus
          autoComplete="off"
          {...register("emailAddress")}
          defaultValue=""
          error={errors.hasOwnProperty("email")}
          helperText={errors.hasOwnProperty("email") ? errors.emailAddress.message : ""}
        />
        <TextField
          style={inputFull}
          type="password"
          label={passwordLabel}
          variant="outlined"
          {...register("password")}
          defaultValue=""
          error={errors.hasOwnProperty("password")}
          helperText={errors.hasOwnProperty("password") ? errors.password.message : ""}
        />
        <hr style={{ marginTop: "10px" }} />
        <Button type="submit" id="formLoginButton" variant="contained" color="secondary" sx={{ width: "100%" }}>
          {mainLabel}
        </Button>
      </form>
      <Box sx={{ margin: "20px 0px" }}>
        <Typography>
          {`${createText} `}
          <Link component="button" onClick={onRegisterClick} id="lpr_register">
            {registerLabel}
          </Link>
        </Typography>
        <Typography sx={{ marginTop: "5px" }}>
          {`${forgotText} `}
          <Link component="button" onClick={onForgotClick} id="lpr_forgot">
            {forgotLabel}
          </Link>
        </Typography>
      </Box>
      <Button
        id="guestButton"
        variant="contained"
        color="secondary"
        sx={{ width: "100%", height: "40px" }}
        onClick={() => {
          onLoginClick({ emailAddress: "guest@guest.com", password: "Guest_Access" });
        }}
      >
        {guestLabel}
      </Button>
    </Box>
  );
};

export default UserLogin;
