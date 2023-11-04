import React, { useCallback, useEffect, useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetailAsync } from "../../redux/detail";
import "./style.css";
import { useParams } from "react-router-dom";
import { BASE_API } from "../../constant/api";

export default function ProductDetail() {
  const dispatch = useDispatch();
  const productDetail = useSelector(
    (state) => state.productDetail.productDetail
  );
  const { id } = useParams();
  const [size, setSize] = useState("M");

  const handleChange = (e) => {
    setSize(e.target.value);
  };

  const renderSubImg = useCallback((images) => {
    if (images) {
      const subImages = [];
      for (var i = 2; i < 6; i++) {
        subImages.push(
          <div className="small-img-col" key={i}>
            <img src={images[i].url} alt="" style={{ width: "100%" }} />
          </div>
        );
      }
      return subImages;
    } else {
      return null;
    }
  }, []);

  useEffect(() => {
    dispatch(getProductDetailAsync({ id }));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="product-detail">
      <div className="single-pro-img">
        <img
          src={productDetail.product?.images[0].url}
          alt=""
          className="main-img"
          style={{ width: "80%" }}
        />
        <div className="small-img-group">
          {renderSubImg(productDetail.product?.images)}
        </div>
      </div>
      <div className="single-pro-details">
        <h4>Home / {productDetail.product?.category}</h4>
        <h2>{productDetail.product?.name}</h2>
        <h4 className="product-price">
          {productDetail.product?.offerPrice} VND
        </h4>
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
          {productDetail.product?.description}
        </span>
      </div>
    </section>
  );
}
