import { createAction, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { SEARCH_PRODUCT_API } from "../constant/api";

export const getSearchAsync = createAction("search/getSearchAsync");

function* getSearchSaga(action) {
  try {
    const query = action.payload;
    const res = yield call(() =>
      axios.get(
        SEARCH_PRODUCT_API + query
      )
    );
    const products = res.data.products;
    yield put(getSearch(products));
  } catch (error) {
    console.log(error);
  }
}

export function* watchGetSearchSaga() {
  yield takeLatest(getSearchAsync, getSearchSaga);
}

const searchSlice = createSlice({
  name: "search",
  initialState: {
    search: [],
    loading: false,
  },
  reducers: {
    getSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

const searchReducer = searchSlice.reducer;
export const { getSearch } = searchSlice.actions;
export default searchReducer;
