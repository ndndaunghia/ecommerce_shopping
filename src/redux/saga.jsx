import { watchGetProductDetail } from "./detail";
import { all } from "redux-saga/effects";
import { watchGetSearchSaga } from "./search";

export default function* rootSaga() {
  yield all([watchGetProductDetail(), watchGetSearchSaga()]);
}
