import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Link, TextField, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import YupPassword from "yup-password";

import { setGlobals } from "../../../../_utils/hooks/functions";
import type { T_Response } from "../../../../_utils/types";
import { login } from "../../_connections/connections";
import { type T_LoginData, type T_UserLogin } from "../../pages/use-landing-page.view-model";
import "./UserLogin.css";

const UserLogin: React.FC<T_UserLogin> = ({
  title,
  email,
  password,
  loginLabel,
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
      console.log(res);
      setGlobals(res.data);
      navigate("/home");
    },
    onError: (err) => {
      console.error(err);
    },
  });

  return (
    <Box id="landingPageRight">
      <Typography id="lp_h6" sx={{ marginBottom: "20px" }}>
        {title}
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          style={inputFull}
          type="email"
          label={email}
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
          label={password}
          variant="outlined"
          {...register("password")}
          defaultValue=""
          error={errors.hasOwnProperty("password")}
          helperText={errors.hasOwnProperty("password") ? errors.password.message : ""}
        />
        <hr style={{ marginTop: "10px" }} />
        <Button type="submit" id="formButton" variant="contained" color="secondary" sx={{ width: "100%" }}>
          {loginLabel}
        </Button>
      </form>
      <Typography>
        {`${createText} `}
        <Link component="button" onClick={onRegisterClick} id="lp_register" disabled>
          {registerLabel}
        </Link>
      </Typography>
      <Typography>
        {`${forgotText} `}
        <Link component="button" onClick={onForgotClick} id="lp_forgot" disabled>
          {forgotLabel}
        </Link>
      </Typography>
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
