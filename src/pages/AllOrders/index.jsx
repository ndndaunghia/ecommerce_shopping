import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "@emotion/styled";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../../constant/constant";
import axios from "axios";
import { ALL_ORDER_API } from "../../constant/api";

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

export default function AllOrders() {
  const csrfToken = localStorage.getItem("token");
  const config = { headers: { "Content-Type": "application/json" } };
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  if (csrfToken) {
    config.headers["token"] = csrfToken;
  }
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

  useEffect(() => {
    axios
      .get(ALL_ORDER_API, config)
      .then((res) => {
        setLoading(false);
        setData(res.data.orders);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/sign-in");
    }
  }, [navigate]);

  return (
    <CartWrapper>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h2>All Order</h2>
          {data?.map((item, index) => {
            return (
              <TableContainer
                component={Paper}
                style={{ margin: "4rem 0" }}
                key={item._id}
              >
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
                      <TableCell>Order ID: {item._id}</TableCell>
                      <TableCell align="right">Price</TableCell>
                      <TableCell align="right">Quantity</TableCell>
                      <TableCell align="right">Sum</TableCell>
                      <TableCell align="right"></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {item?.orderItems?.map((item, index) => {
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
                              src={item.productImage}
                              alt=""
                              style={{ width: "100px" }}
                            />
                            {item.productName}
                          </TableCell>
                          <TableCell align="right">
                            {item.productPrice}
                          </TableCell>
                          <TableCell align="right">{item.quantity}</TableCell>
                          <TableCell align="right">
                            {item.productPrice * item.quantity}
                          </TableCell>
                          <TableCell align="right"></TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                  <TableRow>
                    <TableCell align="center"></TableCell>
                    <TableCell align="right">Shipping Fee</TableCell>
                    <TableCell align="right" colSpan={2}>
                      30000
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center"></TableCell>
                    <TableCell align="right">Total Price</TableCell>
                    <TableCell align="right" colSpan={2}>
                      {item.totalPrice}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center"></TableCell>
                    <TableCell align="right">Payment status</TableCell>
                    <TableCell align="right" colSpan={2}>
                      Paid
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="center"></TableCell>
                    <TableCell align="right">Payment Time</TableCell>
                    <TableCell align="right" colSpan={2}>
                      {new Date(item.paidAt).toLocaleString()}
                    </TableCell>
                  </TableRow>
                </Table>
              </TableContainer>
            );
          })}
        </>
      )}
    </CartWrapper>
  );
}
