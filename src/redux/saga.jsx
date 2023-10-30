import { watchGetProductDetail } from "./detail";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([watchGetProductDetail()]);
}
