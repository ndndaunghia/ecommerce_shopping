import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./style.css";

export default function ProductCard(props) {
  const { image, name, price, offerPrice } = props;
  return (
    <div className="product-card-container">
      <div className="product-card-wrapper">
        <div className="product-card-img">
          <img src={image} alt="" loading="lazy" />
          <div className="product-card-icon-wrapper">
            <div className="product-card-icon">
              <ShoppingCartOutlinedIcon className="icon" />
            </div>
            <div className="product-card-icon">
              <FavoriteBorderOutlinedIcon className="icon" />
            </div>
            <div className="product-card-icon">
              <SearchOutlinedIcon className="icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="product-card-content">
        <h3 className="product-card-name">{name}</h3>
        <div className="product-card-price-wrapper">
          <div className="product-card-price">
            <span className="product-card-current-price">{offerPrice}</span>
            <span className="product-card-before-price">{price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
