import { watchGetProductDetail } from "./detail";
import { all } from "redux-saga/effects";
import { watchGetSearchSaga } from "./search";
import { watchCartSaga } from "./cart";
import { watchGetInfo } from "./info";
import { watchOrderSaga } from "./order";

export default function* rootSaga() {
  yield all([
    watchGetProductDetail(),
    watchGetSearchSaga(),
    watchCartSaga(),
    watchGetInfo(),
    watchOrderSaga(),
  ]);
}
