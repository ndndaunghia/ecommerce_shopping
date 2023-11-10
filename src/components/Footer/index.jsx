import { Grid } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import { FooterItemContainer } from "../GuidanceSection";
import logo from "../../assets/d3.png";

const FooterWrapper = styled(Grid)({
  marginTop: "4rem",
  paddingTop: "4rem",
  borderTop: "1px solid #999999",
});

const FooterItem = styled(Grid)(({ index }) => ({
  textAlign: "center",
  a: {
    color: "#000",
    fontSize: "14px",
    fontWeight: 300,
    fontStyle: "oblique",
    "&:hover": {
      color: "#088178",
    },
  },
}));
export default function Footer() {
  return (
    <FooterWrapper container>
      <FooterItem item xs={12} sm={6} md={3}>
        <div>
          <img src={logo} alt="" style={{ width: "40%" }} />
          <p>Copyright ND Fashion</p>
        </div>
      </FooterItem>
      <FooterItem item xs={12} sm={6} md={3}>
        <h3>Overview</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            marginTop: "10px",
          }}
        >
          <a href="">Search</a>
          <a href="">Product</a>
          <a href="">Support</a>
          <a href="">Hotline</a>
        </div>
      </FooterItem>{" "}
      <FooterItem item xs={12} sm={6} md={3}>
        <h3>Contact</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            marginTop: "10px",
          }}
        >
          <a href="">Email</a>
          <a href="">Payment</a>
          <a href="">Recruitment</a>
          <a href="">Customer Service</a>
        </div>
      </FooterItem>{" "}
      <FooterItem item xs={12} sm={6} md={3}>
        <h3>Support</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            marginTop: "10px",
          }}
        >
          <a href="">Account</a>
          <a href="">Return Policy</a>
          <a href="">Privacy Policy</a>
          <a href="">Accumulate Points</a>
        </div>
      </FooterItem>
    </FooterWrapper>
  );
}
