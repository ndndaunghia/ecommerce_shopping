import { createBrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Banner from "./components/Banner";
import SignIn from "./pages/Authorization/SignIn";
import SignUp from "./pages/Authorization/SignUp";
import CategorySection from "./components/CategorySection";
import TrendingSection from "./components/TrendingSection";
import GuidanceSection from "./components/GuidanceSection";
import ProductDetail from "./pages/ProductDetail";
import MediumBanner from "./components/MediumBanner";
import Footer from "./components/Footer";
import Category from "./pages/Category";
import Search from "./pages/SearchProduct";
import ShoppingCartDemo from "./pages/Cart";
import ForgotPassword from "./pages/Authorization/ForgotPassword";
import ResetPassword from "./pages/Authorization/ResetPassword";
import Payment from "./pages/Payment";
import ConfirmOrder from "./pages/Payment/ConfirmOrder";
import Shipping from "./pages/Payment/Shipping";
import Success from "./pages/Payment/Success";
import Order from "./pages/Order";
import AllOrders from "./pages/AllOrders";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        path: "/",
        element: (
          <>
            <Banner />
            <CategorySection />
            <TrendingSection />
            <MediumBanner />
            <GuidanceSection />
          </>
        ),
      },
      {
        path: "/category/:category",
        element: <Category />,
      },
      {
        path: "/category/:category/product-detail/:id",
        element: <ProductDetail />,
      },
      {
        path: "/product-detail/:id",
        element: <ProductDetail />,
      },
      {
        path: "/search?",
        element: <Search />,
      },
      {
        path: "/search/product-detail/:id",
        element: <ProductDetail />,
      },
      {
        path: "/cart",
        element: <ShoppingCartDemo />,
      },
      {
        path: "/order/:id",
        element: <Order />,
      },
      {
        path: "/all-orders/",
        element: <AllOrders />,
      },
    ],
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/reset-password",
    element: <ForgotPassword />,
  },
  {
    path: "/password/reset/:token",
    element: <ResetPassword />,
  },
  {
    path: "/shipping",
    element: <Shipping />,
  },
  {
    path: "/confirm",
    element: <ConfirmOrder />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
  {
    path: "/success/:id",
    element: <Success />,
  },
]);

export default router;
