import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckoutSteps from "./CheckoutSteps";
import { Link, useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { getInfoAsync } from "../../redux/info";
import { getProductCart, getProductCartAsync } from "../../redux/cart";
import { isLoggedIn } from "../../constant/constant";

const ConfirmOrder = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cart);
  const shippingInfo = JSON.parse(localStorage.getItem("info"));

  const user = useSelector((state) => state.info.info.user);

  let productPrice = cartItems?.cart?.products.reduce(
    (acc, item) => acc + item.quantity * item.productId.price,
    0
  );

  const shippingFee = 30000;

  let totalPrice = productPrice + shippingFee;

  const address = `${shippingInfo.address}, ${shippingInfo.state}, ${shippingInfo.country}`;

  const proceedToPayment = () => {
    const data = {
      productPrice,
      shippingFee,
      totalPrice,
    };

    sessionStorage.setItem("orderInfo", JSON.stringify(data));

    navigate("/payment");
  };

  useEffect(() => {
    dispatch(getInfoAsync());
    dispatch(getProductCartAsync());
  }, []);

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate("/sign-in");
  //   }
  // }, [navigate]);

  return (
    <>
      <CheckoutSteps activeStep={1} />
      <div className="confirmOrderPage">
        <div>
          <div className="confirmshippingArea">
            <Typography>Shipping Info</Typography>
            <div className="confirmshippingAreaBox">
              <div>
                <p>Name:</p>
                <span>{user?.name}</span>
              </div>
              <div>
                <p>Phone:</p>
                <span>{shippingInfo.phoneNo}</span>
              </div>
              <div>
                <p>Address:</p>
                <span>{address}</span>
              </div>
            </div>
          </div>
          <div className="confirmCartItems">
            <Typography>Your Cart Items:</Typography>

            {cartItems?.cart?.products.length === 0 ? (
              <div className="confirmCartItemsContainer">""</div>
            ) : (
              <div className="confirmCartItemsContainer">
                {cartItems?.cart?.products.map((item) => (
                  <div key={item._id}>
                    <img src={item.productId.images[0].url} alt="Product" />
                    <Link to={`/product/${item.productId}`}>
                      {item.productId.name}
                    </Link>{" "}
                    <span>
                      {item.quantity} X {item.productId.price} ={" "}
                      <b>{item.productId.price * item.quantity}</b>
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {/*  */}
        <div>
          <div className="orderSummary">
            <Typography>Order Summery</Typography>
            <div>
              <div>
                <p>Subtotal:</p>
                <span>{productPrice}</span>
              </div>
              <div>
                <p>Shipping Charges:</p>
                <span>{shippingFee}</span>
              </div>
              <div></div>
            </div>

            <div className="orderSummaryTotal">
              <p>
                <b>Total:</b>
              </p>
              <span>{totalPrice}</span>
            </div>

            <button onClick={proceedToPayment}>Proceed To Payment</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmOrder;
