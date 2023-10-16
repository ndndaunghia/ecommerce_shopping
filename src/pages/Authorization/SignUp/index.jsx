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
      <TypographyC variant="h4">Đăng ký</TypographyC>
      <CardC>
        <CardContent>
          <form>
            <Grid container spacing={3}>
              <Grid xs={12} item>
                <InputC
                  id="outlined-basic"
                  label="Tên đăng nhập"
                  variant="outlined"
                  type="email"
                  size="small"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <InputC
                  id="outlined-basic"
                  label="Mật khẩu"
                  variant="outlined"
                  type="password"
                  size="small"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <InputC
                  id="outlined-basic"
                  label="Xác nhận mật khẩu"
                  variant="outlined"
                  type="password"
                  size="small"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <InputC
                  id="outlined-basic"
                  label="Họ và tên"
                  variant="outlined"
                  type="text"
                  size="small"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <InputC
                  id="outlined-basic"
                  label="Số điện thoại"
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
                  id="outlined-basic"
                  label="Địa chỉ"
                  variant="outlined"
                  type="text"
                  size="small"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <Button variant="outlined" fullWidth type="submit">
                  Đăng ký
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </CardC>
    </FormWrapperC>
  );
}
