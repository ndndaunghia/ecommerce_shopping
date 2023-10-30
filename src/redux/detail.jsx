import { createAction, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { BASE_API } from "../constant/api";

export const getProductDetailAsync = createAction(
  "productDetail/getProductDetailAsync"
);

function* getProductDetailSaga(action) {
  const data = yield call(
    () => axios.get(BASE_API + "product/" + action.payload.id),
    action.payload
  );

  yield put(getProductDetail(data?.data));
}

export function* watchGetProductDetail() {
  yield takeLatest(getProductDetailAsync, getProductDetailSaga);
}

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState: {
    productDetail: [],
    loading: false,
  },
  reducers: {
    getProductDetail: (state, action) => {
      state.productDetail = action.payload;
    },
  },
});

const productDetailReducer = productDetailSlice.reducer;
export const { getProductDetail } = productDetailSlice.actions;
export default productDetailReducer;
