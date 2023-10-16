import React from "react";
import { SECTION_TITLE } from "../../constant/constant";
import TitleCustom from "../Title";
import CardSlide from "../CardSlide";

export default function TrendingSection() {
  return (
    <>
      <TitleCustom title={SECTION_TITLE.trending} />
      <CardSlide />
    </>
  );
}
