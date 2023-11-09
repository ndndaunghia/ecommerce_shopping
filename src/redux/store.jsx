import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";
import productDetailReducer from "./detail";
import searchReducer from "./search";
import cartReducer from "./cart";
import infoReducer from "./info";
import orderReducer from "./order";

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    productDetail: productDetailReducer,
    search: searchReducer,
    cart: cartReducer,
    info: infoReducer,
    order: orderReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(rootSaga);
