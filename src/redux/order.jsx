import { createAction, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { CART_API, CREATE_ORDER } from "../constant/api";

export const createOrderAsync = createAction("cart/createOrderAsync");
export const getProductCartAsync = createAction("cart/getProductCartAsync");
export const removeProductCartAsync = createAction(
  "cart/removeProductCartAsync"
);

const token = localStorage.getItem("token");

// function* getProductCartSaga(action) {
//   try {
//     yield put({ type: "cart/setLoading", payload: true });

//     const data = yield call(() => axios.get(CART_API + userId), action.payload);
//     yield put(getProductCart(data?.data));
//   } catch (error) {
//     // Handle error if needed
//   } finally {
//     yield put({ type: "cart/setLoading", payload: false });
//   }
// }

function* createOrderSaga(action) {
  try {
    const config = { headers: { "Content-Type": "application/json" } };

    if (token) {
      config.headers["token"] = token;
    }
    yield put({ type: "order/setLoading", payload: true });

    const data = yield call(() => axios.post(CREATE_ORDER, config));

    yield put({
      type: "order/createOrder",
      payload: data.data,
    });
  } catch (error) {
    // Handle error if needed
  } finally {
    yield put({ type: "order/setLoading", payload: false });
  }
}

// function* removeProductCartSaga(action) {
//   try {
//     yield call(() => axios.delete(CART_API + userId + "/" + action.payload));
//     yield put(removeProduct(action.payload));
//     yield put(getProductCartAsync());
//   } catch (error) {
//     // Handle error if needed
//   }
// }

export function* watchOrderSaga() {
  yield takeLatest(createOrderAsync, createOrderSaga);
  //   yield takeLatest(getProductCartAsync, getProductCartSaga);
  //   yield takeLatest(removeProductCartAsync, removeProductCartSaga);
}

const orderSlice = createSlice({
  name: "order",
  initialState: {
    order: [],
    loading: false,
  },
  reducers: {
    getProductCart: (state, action) => {
      state.cart = action.payload;
    },
    createOrder: (state, action) => {
      state.order.push(action.payload);
    },
    removeProduct: (state, action) => {
      console.log(action.payload);
      // state.cart = state.cart.filter((cart) => cart.id !== action.payload);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

const orderReducer = orderSlice.reducer;
export const { createOrder, getProductCart, removeProduct, setLoading } =
  orderSlice.actions;
export default orderReducer;
