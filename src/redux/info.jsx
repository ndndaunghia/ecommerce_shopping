import { createAction, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { BASE_API } from "../constant/api";

export const getInfoAsync = createAction("info/getInfoAsync");

const token = localStorage.getItem("token");
function* getInfoSaga(action) {
  const config = { headers: { "Content-Type": "application/json" } };

  if (token) {
    config.headers["token"] = token;
  }
  const data = yield call(() => axios.get(BASE_API + "me", config));

  yield put(getInfo(data?.data));
}

export function* watchGetInfo() {
  yield takeLatest(getInfoAsync, getInfoSaga);
}

const infoSlice = createSlice({
  name: "info",
  initialState: {
    info: [],
    loading: false,
  },
  reducers: {
    getInfo: (state, action) => {
      state.info = action.payload;
    },
  },
});

const infoReducer = infoSlice.reducer;
export const { getInfo } = infoSlice.actions;
export default infoReducer;
