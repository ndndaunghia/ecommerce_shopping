import React, { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  useScrollTrigger,
} from "@mui/material";
import "./style.css";

export default function ProductDetail() {
  const [size, setSize] = useState("M");

  const handleChange = (e) => {
    setSize(e.target.value);
  };

  return (
    <section className="product-detail">
      <div className="single-pro-img">
        <img
          src="https://product.hstatic.net/200000537721/product/1_6c114c66b7c04485b08bab7a50ee1bc5_grande.png"
          alt=""
          className="main-img"
          style={{ width: "100%" }}
        />
        <div className="small-img-group">
          <div className="small-img-col">
            <img
              src="https://product.hstatic.net/200000537721/product/1_6c114c66b7c04485b08bab7a50ee1bc5_grande.png"
              alt=""
              style={{ width: "100%" }}
            />
          </div>
          <div className="small-img-col">
            <img
              src="https://product.hstatic.net/200000537721/product/1_6c114c66b7c04485b08bab7a50ee1bc5_grande.png"
              alt=""
              style={{ width: "100%" }}
            />
          </div>
          <div className="small-img-col">
            <img
              src="https://product.hstatic.net/200000537721/product/1_6c114c66b7c04485b08bab7a50ee1bc5_grande.png"
              alt=""
              style={{ width: "100%" }}
            />
          </div>
          <div className="small-img-col">
            <img
              src="https://product.hstatic.net/200000537721/product/1_6c114c66b7c04485b08bab7a50ee1bc5_grande.png"
              alt=""
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
      <div className="single-pro-details">
        <h4>Home / T-Shirt</h4>
        <h2>Leisury</h2>
        <h4 className="product-price">$120.00</h4>
        <FormControl sx={{ m: 1, minWidth: 60 }} size="small">
          <InputLabel id="demo-simple-select-label">Size</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={size}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={"M"}>M</MenuItem>
            <MenuItem value={"L"}>L</MenuItem>
            <MenuItem value={"XL"}>XL</MenuItem>
          </Select>
        </FormControl>
        <div className="quantity-wrapper">
          <div className="quantity">
            <span className="change-quantity">-</span>
            <input type="number" className="quantity-number" defaultValue={1} />
            <span className="change-quantity">+</span>
          </div>
          <button type="button" className="add-to-cart-btn">
            Add to cart
          </button>
        </div>
        <h4 className="product-description-title">Product Description</h4>
        <span className="product-description">
          Build and Deploy Ecommerce Website With HTML CSS JavaScript |
          Responsive Shopping Website Part 2
        </span>
      </div>
    </section>
  );
}
