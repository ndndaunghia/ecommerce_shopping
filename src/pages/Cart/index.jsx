import React, { useCallback, useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import styled from "@emotion/styled";
import { RotatingLines, TailSpin, ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductCartAsync, removeProductCartAsync } from "../../redux/cart";
import { isLoggedIn } from "../../constant/constant";

const CartWrapper = styled.div`
  margin-top: 6rem;
  padding: 0 4rem;
  text-align: "center";
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
  }
`;

const ActionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 4rem;
  margin: 4rem 0;
`;

const LeftAction = styled(Link)`
  padding: 8px 10px;
  border: 2px solid #088178;
  border-radius: 12px;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;

const RemoveBtnC = styled(DeleteOutlinedIcon)`
  cursor: pointer;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;

const RightAction = styled.div``;

export default function SpanningTable() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.cart.cart);
  const loading = useSelector((state) => state.cart.loading);

  const totalPrice = data?.cart?.products.reduce((total, item) => {
    return total + item.productId.price * item.quantity;
  }, 0);

  const handleRemoveProductFromCart = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to remove this product from the cart?"
    );
    if (confirmed) {
      dispatch(removeProductCartAsync(id));
    }
  };

  const handlePayment = () => {
    navigate("/shipping");
  };

  const Spinner = (props) => {
    const style = {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    };

    return (
      <div style={style}>
        <ThreeDots
          height="40"
          width="40"
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    );
  };

  // useEffect(() => {
  //   if (isLoggedIn == false) {
  //     navigate("/sign-in");
  //   }
  // }, [navigate]);

  useEffect(() => {
    dispatch(getProductCartAsync());
  }, []);

  return (
    <CartWrapper>
      {data?.cart?.products.length == 0 ? (
        <h2>Nothing in your cart</h2>
      ) : (
        <>
          {" "}
          <h2>Cart</h2>
          {loading ? (
            <Spinner />
          ) : (
            <>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center" colSpan={3}>
                        Details
                      </TableCell>
                      <TableCell align="right">Price</TableCell>
                      <TableCell align="right"></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Products</TableCell>
                      <TableCell align="right">Price</TableCell>
                      <TableCell align="right">Quantity</TableCell>
                      <TableCell align="right">Sum</TableCell>
                      <TableCell align="right"></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data?.cart?.products.map((item, index) => {
                      return (
                        <TableRow key={index}>
                          <TableCell
                            style={{
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                            }}
                          >
                            <img
                              src={item.productId?.images[0]?.url}
                              alt=""
                              style={{ width: "100px" }}
                            />
                            {item.productId.name}
                            <br />
                            Size: {item.size}
                          </TableCell>
                          <TableCell align="right">
                            {item.productId.price}
                          </TableCell>
                          <TableCell align="right">{item.quantity}</TableCell>
                          <TableCell align="right">
                            {item.productId.price * item.quantity}
                          </TableCell>
                          <TableCell align="right">
                            <RemoveBtnC
                              onClick={() =>
                                handleRemoveProductFromCart(item._id)
                              }
                            />
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                  <TableRow>
                    <TableCell align="center"></TableCell>
                    <TableCell align="right">Total Price</TableCell>
                    <TableCell align="right" colSpan={2}>
                      {totalPrice}
                    </TableCell>
                  </TableRow>
                </Table>
              </TableContainer>

              <ActionWrapper>
                <LeftAction>
                  <Link to="/">Continue Shopping</Link>
                </LeftAction>
                <RightAction>
                  <button
                    type="button"
                    className="add-to-cart-btn"
                    onClick={handlePayment}
                  >
                    Pay Now
                  </button>
                </RightAction>
              </ActionWrapper>
            </>
          )}
        </>
      )}
    </CartWrapper>
  );
}
