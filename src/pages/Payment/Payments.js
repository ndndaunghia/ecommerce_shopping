import React, { useEffect, useRef } from "react";
import CheckoutSteps from "./CheckoutSteps";
import { Typography } from "@mui/material";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import "./Payment.css";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import EventIcon from "@mui/icons-material/Event";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getInfoAsync } from "../../redux/info";
import { cleanCartAsync, getProductCartAsync } from "../../redux/cart";
import axios from "axios";
import { CREATE_ORDER, PAYMENT_API } from "../../constant/api";
import { isLoggedIn } from "../../constant/constant";

const Payments = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  const shippingInfo = JSON.parse(localStorage.getItem("info"));

  const stripe = useStripe();
  const elements = useElements();
  const payBtn = useRef(null);

  const cartItems = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.info.info.user);

  const config = { headers: { "Content-Type": "application/json" } };

  const csrfToken = localStorage.getItem("token");
  // const { error, loading } = useSelector((state) => state.order);

  const paymentData = {
    amount: Math.round(orderInfo.totalPrice * 100),
  };

  const order = {
    shippingInfo,
    orderItems: cartItems?.cart?.products?.map((item) => ({
      productId: item.productId._id,
      productName: item.productId.name,
      productPrice: item.productId.price,
      quantity: item.quantity,
      productImage: item.productId.images[0].url,
    })),
    itemsPrice: orderInfo.productPrice,
    shippingPrice: orderInfo.shippingFee,
    totalPrice: orderInfo.totalPrice,
  };

  const handlePayment = async (order) => {
    await axios
      .post(CREATE_ORDER, order, config)
      .then((res) => {
        dispatch(cleanCartAsync());
        navigate(`/success/${res.data.order._id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    payBtn.current.disabled = true;

    try {
      if (csrfToken) {
        config.headers["token"] = csrfToken;
      }
      const { data } = await axios.post(PAYMENT_API, paymentData, config);

      const client_secret = data.client_secret;

      if (!stripe || !elements) return;

      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: user.name,
            email: user.email,
            address: {
              line1: shippingInfo.address,
              city: shippingInfo.city,
              state: shippingInfo.state,
              country: shippingInfo.country,
            },
          },
        },
      });

      if (result.error) {
        payBtn.current.disabled = false;
      } else {
        if (result.paymentIntent.status === "succeeded") {
          order.paymentInfo = {
            id: result.paymentIntent.id,
            status: result.paymentIntent.status,
          };

          handlePayment(order);
        } else {
        }
      }
    } catch (error) {
      payBtn.current.disabled = false;
    }
  };

  useEffect(() => {
    dispatch(getInfoAsync());
    dispatch(getProductCartAsync());
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/sign-in");
    }
  }, [navigate]);

  return (
    <>
      <CheckoutSteps activeStep={2} />
      <div className="paymentContainer">
        <form className="paymentForm" onSubmit={(e) => submitHandler(e)}>
          <Typography>Card Info</Typography>
          <div>
            <CreditCardIcon />
            <CardNumberElement className="paymentInput" />
          </div>
          <div>
            <EventIcon />
            <CardExpiryElement className="paymentInput" />
          </div>
          <div>
            <VpnKeyIcon />
            <CardCvcElement className="paymentInput" />
          </div>

          <input
            type="submit"
            value={`Pay - $ `}
            ref={payBtn}
            className="paymentFormBtn"
          />
        </form>
      </div>
    </>
  );
};

export default Payments;
