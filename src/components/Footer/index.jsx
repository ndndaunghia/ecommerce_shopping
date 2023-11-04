import { Grid } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import { FooterItemContainer } from "../GuidanceSection";

const FooterWrapper = styled(Grid)({
  marginTop: "4rem",
  paddingTop: "4rem",
  borderTop: "1px solid #999999",
});

const FooterItem = styled(Grid)(({ index }) => ({
  textAlign: "center",
}));
export default function Footer() {
  return (
    <FooterWrapper container>
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
      </FooterItem>
    </FooterWrapper>
  );
}
