import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";
import { BASE_API } from "../../constant/api";
import Payments from "./Payments";

export default function Payment() {
  const [stripeApiKey, setStripeApiKey] = useState("")
  const csrfToken = localStorage.getItem("token");

  async function getStripeApiKey() {
    const config = { headers: { "Content-Type": "application/json" } };

    if (csrfToken) {
      config.headers["token"] = csrfToken;
    }
    const { data } = await axios.get(BASE_API + "stripeapikey", config);

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    if (csrfToken) {
      getStripeApiKey();
    }
  }, [csrfToken]);


  return (
    <Elements stripe={loadStripe(stripeApiKey)}>
      <Payments />
    </Elements>
  );
}
