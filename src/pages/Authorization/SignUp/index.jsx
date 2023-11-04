import React from "react";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import styled from "@emotion/styled";
import InputC from "../../../components/InputC";

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
  return (
    <FormWrapperC>
      <TypographyC variant="h4">Sign up</TypographyC>
      <CardC>
        <CardContent>
          <form>
            <Grid container spacing={3}>
              <Grid xs={12} item>
                <InputC
                  label="Email"
                  variant="outlined"
                  type="email"
                  size="small"
                  fullWidth
                  required
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
                />
              </Grid>
              <Grid xs={12} item>
                <InputC
                  label="Phone number"
                  variant="outlined"
                  type="tel"
                  size="small"
                  fullWidth
                  required
                  pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
                />
              </Grid>
              <Grid xs={12} item>
                <InputC
                  label="Address"
                  variant="outlined"
                  type="text"
                  size="small"
                  fullWidth
                  required
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
  );
}
