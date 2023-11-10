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
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductCartAsync, removeProductCartAsync } from "../../redux/cart";
import { isLoggedIn } from "../../constant/constant";
import axios from "axios";
import { SINGLE_ORDER_API } from "../../constant/api";

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

export default function Order() {
  const { id } = useParams();
  const csrfToken = localStorage.getItem("token");
  const config = { headers: { "Content-Type": "application/json" } };
  const [data, setData] = useState([]);

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
      .get(SINGLE_ORDER_API + id, config)
      .then((res) => {
        console.log(res.data);
        setData(res.data.order);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <CartWrapper>
      <>
        {" "}
        <h2>Order</h2>
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
                {data?.orderItems?.map((item, index) => {
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
                      <TableCell align="right">{item.productPrice}</TableCell>
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
                  {data.totalPrice}
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
                  {new Date(data.paidAt).toLocaleString()}
                </TableCell>
              </TableRow>
            </Table>
          </TableContainer>
        </>
      </>
    </CartWrapper>
  );
}
