import React, { useCallback, useEffect, useState } from "react";
import {
  Alert,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetailAsync } from "../../redux/detail";
import "./style.css";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("M");
  const [maxQuantityAlert, setMaxQuantityAlert] = useState(false);

  const dispatch = useDispatch();
  const productDetail = useSelector(
    (state) => state.productDetail.productDetail
  );
  const { id } = useParams();

  const handleChange = (e) => {
    setSize(e.target.value);
  };

  const increaseQuantity = () => {
    if (productDetail.product?.Stock == 0) return;
    else {
      if (quantity < productDetail.product?.Stock) {
        setQuantity((prev) => prev + 1);
      } else {
        setMaxQuantityAlert(true);
      }
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    } else return;
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

  const renderAddBtn = useCallback(() => {
    if (productDetail.product?.Stock > 0) {
      return (
        <button type="button" className="add-to-cart-btn">
          Add to cart
        </button>
      );
    } else {
      return (
        <button type="button" className="out-of-stock-btn" disabled>
          Out of Stock
        </button>
      );
    }
  });

  useEffect(() => {
    dispatch(getProductDetailAsync({ id }));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
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
          <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
            <InputLabel id="demo-simple-select-label">Size</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              defaultValuevalue={size}
              label="Size"
              onChange={handleChange}
            >
              {productDetail.product?.size.split(",").map((sizeOption) => (
                <MenuItem key={sizeOption} value={sizeOption.trim()}>
                  {sizeOption.trim()}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <div className="quantity-wrapper">
            <div className="quantity">
              <span
                className="change-quantity"
                onClick={() => decreaseQuantity()}
              >
                -
              </span>
              <input
                type="number"
                className="quantity-number"
                value={quantity}
              />
              <span
                className="change-quantity"
                onClick={() => increaseQuantity()}
              >
                +
              </span>
            </div>

            {renderAddBtn()}
          </div>
          <h4 className="product-description-title">Product Description</h4>
          <div className="stock-wrapper">
            <h4>Stock: </h4>
            <p>{productDetail.product?.Stock}</p>
          </div>
          <span className="product-description">
            {productDetail.product?.description}
          </span>
        </div>
      </section>
      <Snackbar
        open={maxQuantityAlert}
        autoHideDuration={5000}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        onClose={() => {
          setMaxQuantityAlert(false);
        }}
      >
        <Alert onClose={() => setMaxQuantityAlert(false)} severity="info">
          Max quantity !
        </Alert>
      </Snackbar>
    </>
  );
}
