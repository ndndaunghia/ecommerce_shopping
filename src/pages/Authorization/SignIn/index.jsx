import React from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import InputC from "../../../components/InputC";
import Header from "../../../components/Header";
import { COLOR } from "../../../constant/constant";

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

const ButtonC = styled(Button)({
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
  return (
    <FormWrapperC>
      <TypographyC variant="h4">Đăng nhập</TypographyC>
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
                <ButtonC variant="outlined" fullWidth type="submit">
                  Đăng nhập
                </ButtonC>
              </Grid>
              <Grid
                xs={12}
                item
                style={{ alignItems: "flex-start", display: "flex" }}
              >
                <Typography variant="subtitle1">
                  <Link href="#" underline="none">
                    Quên mật khẩu
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
                  Bạn chưa có tài khoản?
                  <Link href="#" underline="none">
                    Đăng ký
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </CardC>
    </FormWrapperC>
  );
}
