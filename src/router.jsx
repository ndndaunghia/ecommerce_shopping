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
]);

export default router;
