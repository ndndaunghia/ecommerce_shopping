import React, { useState } from "react";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import styled from "@emotion/styled";
import InputC from "../../../components/InputC";
import { COLOR } from "../../../constant/constant";
import axios from "axios";
import { LOGIN_API } from "../../../constant/api";
import { useNavigate } from "react-router-dom";
import { Alert, Snackbar } from "@mui/material";
import { Link } from "react-router-dom";

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

export const ButtonC = styled(Button)({
  "&:hover": {
    backgroundColor: COLOR.primaryColor,
    color: COLOR.whiteColor,
  },
});

const TypographyC = styled(Typography)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(LOGIN_API, {
        email: email,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.user._id);
        localStorage.setItem("isLoggedIn", true);
        setShowSuccessAlert(true);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((error) => {
        setShowErrorAlert(true);
      });
  };

  return (
    <>
      <FormWrapperC>
        <TypographyC variant="h4">Sign in</TypographyC>
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
                    onChange={(e) => setEmail(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
                <Grid xs={12} item>
                  <ButtonC variant="outlined" fullWidth type="submit">
                    Sign in
                  </ButtonC>
                </Grid>
                <Grid
                  xs={12}
                  item
                  style={{ alignItems: "flex-start", display: "flex" }}
                >
                  <Typography variant="subtitle1">
                    <Link to="/reset-password" underline="none">
                      Forgot password
                    </Link>
                  </Typography>
                </Grid>
                <Grid
                  xs={12}
                  item
                  style={{
                    alignItems: "flex-start",
                    display: "flex",
                    paddingTop: "12px",
                  }}
                >
                  <Typography variant="subtitle2">
                    You don't have account?
                    <Link href="#" underline="none">
                      Sign up
                    </Link>
                  </Typography>
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
          Sign in successfully!
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
          Please check your account!
        </Alert>
      </Snackbar>
    </>
  );
}
