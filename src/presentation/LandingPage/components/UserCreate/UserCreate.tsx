import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import YupPassword from "yup-password";

import type { T_CreateData, T_UserForm } from "../../pages/use-landing-page.view-model";
import "./UserCreate.css";

const UserCreate: React.FC<T_UserForm> = ({
  emailLabel,
  passwordLabel,
  confirmPasswordLabel,
  titleLabel,
  mainLabel,
  firstNameLabel,
  lastNameLabel,
  onCreateClick,
}) => {
  YupPassword(yup);
  const inputFull = { width: "100%", margin: "10px 0px" };

  // form Schema ----------------
  const createSchema = yup
    .object({
      firstName: yup
        .string()
        .max(255)
        .matches(/^[a-zA-Z,.'-]+$/i, "You used disallowed characters")
        .required("Missing Name"),
      lastName: yup
        .string()
        .max(255)
        .matches(/^[a-zA-Z,.'-]+$/i, "You used disallowed characters")
        .required("Missing Name"),
      emailAddress: yup.string().email().max(255).required("Missing Email"),
      password: yup.string().password().max(255).required("Missing Password"),
      passwordConfirmation: yup
        .string()
        .password()
        .max(255)
        .oneOf([yup.ref("password"), null], "Passwords must match"),
    })
    .required();

  // form setup ----------------
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createSchema),
  });
  // ----------------------------

  const onSubmit = (data: T_CreateData): void => {
    onCreateClick(data);
  };

  return (
    <Box id="landingPageRight">
      <Typography id="lp_h6" sx={{ marginBottom: "20px" }}>
        {titleLabel}
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          style={inputFull}
          type="text"
          label={firstNameLabel}
          variant="outlined"
          autoFocus
          autoComplete="off"
          {...register("firstName")}
          defaultValue=""
          error={errors.hasOwnProperty("firstName")}
          helperText={errors.hasOwnProperty("firstName") ? errors.firstName.message : ""}
        />
        <TextField
          style={inputFull}
          type="text"
          label={lastNameLabel}
          variant="outlined"
          autoFocus
          autoComplete="off"
          {...register("lastName")}
          defaultValue=""
          error={errors.hasOwnProperty("lastName")}
          helperText={errors.hasOwnProperty("lastName") ? errors.lastName.message : ""}
        />
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
        <TextField
          style={inputFull}
          type="password"
          label={confirmPasswordLabel}
          variant="outlined"
          {...register("passwordConfirmation")}
          defaultValue=""
          error={errors.hasOwnProperty("passwordConfirmation")}
          helperText={errors.hasOwnProperty("passwordConfirmation") ? errors.passwordConfirmation.message : ""}
        />
        <hr style={{ marginTop: "10px" }} />
        <Button type="submit" id="formButton" variant="contained" color="secondary" sx={{ width: "100%" }}>
          {mainLabel}
        </Button>
      </form>
    </Box>
  );
};

export default UserCreate;
