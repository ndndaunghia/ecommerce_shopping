import React, { useState } from "react";
import { CardC, FormWrapperC, TypographyC } from "../SignUp";
import { Alert, CardContent, Grid, Snackbar } from "@mui/material";
import InputC from "../../../components/InputC";
import { ButtonC } from "../SignIn";
import axios from "axios";
import { FORGOT_PASSWORD_API } from "../../../constant/api";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(FORGOT_PASSWORD_API, {
        email: email,
      })
      .then((res) => {
        console.log(res);
        setShowSuccessAlert(true);
      })
      .catch((error) => {
        setShowErrorAlert(true);
      });
  };
  return (
    <>
      <FormWrapperC>
        <TypographyC variant="h4">Confirm Email</TypographyC>
        <CardC>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid xs={12} item>
                  <InputC
                    label="Email"
                    variant="outlined"
                    type="email"
                    size="small"
                    fullWidth
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>

                <Grid xs={12} item>
                  <ButtonC variant="outlined" fullWidth type="submit">
                    Reset Password
                  </ButtonC>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </CardC>
      </FormWrapperC>
      <Snackbar
        open={showSuccessAlert}
        autoHideDuration={5000}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        onClose={() => {
          setShowSuccessAlert(false);
        }}
      >
        <Alert onClose={() => setShowSuccessAlert(false)} severity="success">
          Request to reset password successfully!
        </Alert>
      </Snackbar>
      <Snackbar
        open={showErrorAlert}
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        onClose={() => {
          setShowErrorAlert(false);
        }}
      >
        <Alert onClose={() => setShowErrorAlert(false)} severity="warning">
          Please check your email !
        </Alert>
      </Snackbar>
    </>
  );
}
