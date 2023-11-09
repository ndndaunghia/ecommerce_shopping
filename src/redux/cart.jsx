import { createAction, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { CART_API } from "../constant/api";

export const addProductToCartAsync = createAction("cart/addProductToCartAsync");
export const getProductCartAsync = createAction("cart/getProductCartAsync");
export const removeProductCartAsync = createAction(
  "cart/removeProductCartAsync"
);

const userId = localStorage.getItem("userId");

function* getProductCartSaga(action) {
  try {
    yield put({ type: "cart/setLoading", payload: true });

    const data = yield call(() => axios.get(CART_API + userId), action.payload);
    yield put(getProductCart(data?.data));
  } catch (error) {
    // Handle error if needed
  } finally {
    yield put({ type: "cart/setLoading", payload: false });
  }
}

function* addProductToCartSaga(action) {
  try {
    yield put({ type: "cart/setLoading", payload: true });

    const data = yield call(() =>
      axios.post(CART_API + userId + "/" + action.payload.item.id, {
        quantity: action.payload.item.quantity,
        size: action.payload.item.size,
      })
    );

    yield put({
      type: "cart/addProductToCart",
      payload: data.data,
    });
  } catch (error) {
    // Handle error if needed
  } finally {
    yield put({ type: "cart/setLoading", payload: false });
  }
}

function* removeProductCartSaga(action) {
  try {
    yield call(() => axios.delete(CART_API + userId + "/" + action.payload));
    yield put(removeProduct(action.payload));
    yield put(getProductCartAsync());
  } catch (error) {
    // Handle error if needed
  }
}

export function* watchCartSaga() {
  yield takeLatest(addProductToCartAsync, addProductToCartSaga);
  yield takeLatest(getProductCartAsync, getProductCartSaga);
  yield takeLatest(removeProductCartAsync, removeProductCartSaga);
}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    loading: false,
  },
  reducers: {
    getProductCart: (state, action) => {
      state.cart = action.payload;
    },
    addProductToCart: (state, action) => {
      state.cart.push(action.payload);
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

const cartReducer = cartSlice.reducer;
export const { addProductToCart, getProductCart, removeProduct, setLoading } =
  cartSlice.actions;
export default cartReducer;
