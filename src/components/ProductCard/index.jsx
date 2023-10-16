import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./style.css";

export default function ProductCard() {
  return (
    <div className="product-card-container">
      <div className="product-card-wrapper">
        <div className="product-card-img">
          <a href="">
            <img
              src="https://product.hstatic.net/200000537721/product/1_6c114c66b7c04485b08bab7a50ee1bc5_grande.png"
              alt=""
            />
          </a>
          <div className="product-card-icon-wrapper">
            <div className="product-card-icon">
              <a href="">
                <ShoppingCartOutlinedIcon />
              </a>
            </div>
            <div className="product-card-icon">
              <a href="">
                <FavoriteBorderOutlinedIcon />
              </a>
            </div>
            <div className="product-card-icon">
              <a href="">
                <SearchOutlinedIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="product-card-content">
        <h3 className="product-card-name">Name product</h3>
        <div className="product-card-price-wrapper">
          <div className="product-card-price">
            <span className="product-card-current-price">$1000</span>
            <span className="product-card-before-price">$1200</span>
          </div>
        </div>
      </div>
    </div>
  );
}
