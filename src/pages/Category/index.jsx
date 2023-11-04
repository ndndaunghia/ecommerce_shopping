import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { CATEGORY_BASE_API } from "../../constant/api";
import ProductCard from "../../components/ProductCard";
import styled from "@emotion/styled";
import axios from "axios";

export const GridContainer = styled(Grid)`
  padding: 6rem 0;
  text-align: center;
`;

export const GridItem = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`;

export const CategoryContainer = styled.div`
  padding-top: 6rem;
  text-align: center;

  h2 {
    font-size: 2rem;
    font-weight: 500;
  }
`;

export default function Category() {
  const { category } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(CATEGORY_BASE_API + category)
      .then((res) => setData(res.data.products))
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <CategoryContainer>
      <h2>{category}</h2>
      <GridContainer container className="cardContainer">
        {data.map((data, index) => {
          return (
            <GridItem item xs={12} sm={6} md={3} key={data.id}>
              <Link to={`product-detail/${data._id}`}>
                <ProductCard
                  name={data.name}
                  image={data.images[0].url}
                  subImage={data.images[1].url}
                  price={data.price}
                  offerPrice={data.offerPrice}
                />
              </Link>
            </GridItem>
          );
        })}
      </GridContainer>
    </CategoryContainer>
  );
}
