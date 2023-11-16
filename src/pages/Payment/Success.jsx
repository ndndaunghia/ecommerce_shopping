import React, { useEffect } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./orderSuccess.css";
import { Typography } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import { isLoggedIn } from "../../constant/constant";

const Success = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate("/sign-in");
  //   }
  // }, [navigate]);
  return (
    <div className="orderSuccess">
      <CheckCircleIcon />

      <Typography>Your Order has been Placed successfully </Typography>
      <Link to={`/order/${id}`}>View Orders</Link>
    </div>
  );
};

export default Success;
