import React, { useState } from "react";
import { CardC, FormWrapperC, TypographyC } from "../SignUp";
import { Alert, CardContent, Grid, Snackbar } from "@mui/material";
import InputC from "../../../components/InputC";
import { ButtonC } from "../SignIn";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { RESET_PASSWORD_API } from "../../../constant/api";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [showErrorConfirmAlert, setShowErrorConfirmAlert] = useState(false);

  const { token } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      if (password.length >= 8 && confirmPassword.length >= 8) {
        axios
          .put(RESET_PASSWORD_API + token, {
            password: password,
            confirmPassword: confirmPassword,
          })
          .then((res) => {
            console.log(res);
            setShowSuccessAlert(true);
            setTimeout(() => {
              navigate("/sign-in");
            }, 2000);
          })
          .catch((error) => {
            console.log(error);
            setShowErrorAlert(true);
          });
      } else {
        setShowErrorAlert(true);
      }
    } else {
      setShowErrorConfirmAlert(true);
    }
  };
  return (
    <>
      <FormWrapperC>
        <TypographyC variant="h4">Reset password</TypographyC>
        <CardC>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid xs={12} item>
                  <InputC
                    label="New password"
                    variant="outlined"
                    type="password"
                    size="small"
                    fullWidth
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
                <Grid xs={12} item>
                  <InputC
                    label="Confirm password"
                    variant="outlined"
                    type="password"
                    size="small"
                    fullWidth
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
        autoHideDuration={2000}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        onClose={() => {
          setShowSuccessAlert(false);
        }}
      >
        <Alert onClose={() => setShowSuccessAlert(false)} severity="success">
          Reset password successfully!
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
          Password must be at least 8 characters !
        </Alert>
      </Snackbar>
      <Snackbar
        open={showErrorConfirmAlert}
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        onClose={() => {
          setShowErrorConfirmAlert(false);
        }}
      >
        <Alert
          onClose={() => setShowErrorConfirmAlert(false)}
          severity="warning"
        >
          Confirm password is incorrect !
        </Alert>
      </Snackbar>
    </>
  );
}
