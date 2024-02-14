import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import * as yup from "yup";
import YupPassword from "yup-password";

import { type IntUserLogin } from "../../pages/use-landing-page.view-model";
import "./UserLogin.css";

const UserLogin: React.FC<IntUserLogin> = ({
  title,
  email,
  password,
  loginLabel,
  createText,
  registerLabel,
  onLoginClick,
}) => {
  YupPassword(yup);
  const inputFull = { width: "100%", margin: "10px 0px" };

  // form Schema ----------------
  const loginSchema = yup
    .object({
      email: yup.string().email().required("Missing Email"),
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

  const onSubmit = (data): void => {
    onLoginClick(data.email, data.password);
  };

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
          {...register("email")}
          defaultValue=""
          error={errors.hasOwnProperty("email")}
          helperText={errors.hasOwnProperty("email") ? errors.email.message : ""}
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
        <NavLink to={"/home"} id="lp_register">
          {registerLabel}
        </NavLink>
      </Typography>
    </Box>
  );
};

export default UserLogin;
