import React, { useState } from "react";
import { CategoryContainer, GridContainer, GridItem } from "../Category";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { SEARCH_PRODUCT_API } from "../../constant/api";
import ProductCard from "../../components/ProductCard";

export default function Search() {
  const products = useSelector((state) => state.search.search);
  if (products.length == 0) {
    return (
      <GridContainer>
        <h2>Sorry, we don't have the product that you were looking for ☹</h2>
      </GridContainer>
    );
  }
  return (
    <CategoryContainer>
      <h2>
        {products.length} {products.length == 1 ? "product" : "products"}{" "}
      </h2>
      <GridContainer container className="cardContainer">
        {products.map((data, index) => {
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
