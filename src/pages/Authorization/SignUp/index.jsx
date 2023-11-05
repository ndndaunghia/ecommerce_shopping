import React, { useState } from "react";
import {
  Alert,
  Button,
  Card,
  CardContent,
  Grid,
  Snackbar,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import InputC from "../../../components/InputC";
import axios from "axios";
import { REGISTER_API } from "../../../constant/api";
import { useNavigate } from "react-router-dom";

const FormWrapperC = styled.div`
  min-height: 100vh;
  margin: 6rem;
`;

const CardC = styled(Card)({
  maxWidth: 300,
  minHeight: 240,
  margin: "20px auto",
  padding: "16px",
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
});

const TypographyC = styled(Typography)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export default function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [showErrorPasswordAlert, setShowErrorPasswordAlert] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      if (password.length >= 8 && confirmPassword.length >= 8) {
        axios
          .post(REGISTER_API, {
            email: email,
            name: name,
            password: password,
          })
          .then((res) => {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("isLoggedIn", true);
            setShowSuccessAlert(true);
            // setTimeout(() => {
            //   navigate("/");
            // }, 1000);
          })
          .catch((error) => {
            setShowErrorAlert(true);
          });
      } else {
        setShowErrorPasswordAlert(true);
      }
    } else {
      setShowErrorPasswordAlert(true);
    }
  };
  return (
    <>
      <FormWrapperC>
        <TypographyC variant="h4">Sign up</TypographyC>
        <CardC>
          <CardContent>
            <form onSubmit={handleSignUp}>
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
                  <InputC
                    label="Username"
                    variant="outlined"
                    type="text"
                    size="small"
                    fullWidth
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
                <Grid xs={12} item>
                  <InputC
                    label="Password"
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
                  <Button variant="outlined" fullWidth type="submit">
                    Sign up
                  </Button>
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
          Sign up successfully!
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
          User already exists !
        </Alert>
      </Snackbar>
      <Snackbar
        open={showErrorPasswordAlert}
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        onClose={() => {
          setShowErrorPasswordAlert(false);
        }}
      >
        <Alert
          onClose={() => setShowErrorPasswordAlert(false)}
          severity="warning"
        >
          Please check your password !
        </Alert>
      </Snackbar>
    </>
  );
}
