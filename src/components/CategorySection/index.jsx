import { Grid } from "@mui/material";
import React from "react";
import Card from "../Card";
import "./style.css";
import CategoryItem from "../CategoryItem";
import { CATEGORY_IMAGE, SECTION_TITLE } from "../../constant/constant";
import TitleCustom from "../Title";

export default function CategorySection() {
  return (
    <>
      <TitleCustom title={SECTION_TITLE.category}/>
      <Grid container className="cardContainer">
        {CATEGORY_IMAGE.map((data, index) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              className="cardItemWrapper"
              key={data.id}
            >
              <CategoryItem image={data.image} title={data.title} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
