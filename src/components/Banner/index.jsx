import React from "react";
import "./style.css";
import { Button } from "@mui/material";

export default function Banner() {
  return (
    <section className="homeBanner" id="homeBanner">
      <div className="contentBanner">
        <h3>Cool Fashion</h3>
        <p>Smart, beautiful, unique just like you </p>
        <Button variant="outlined" fullWidth type="submit" className="btnBanner">
          Shop now
        </Button>
      </div>
    </section>
  );
}
