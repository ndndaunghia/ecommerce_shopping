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

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
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
            <MediumBanner/>
            <GuidanceSection />
          </>
        ),
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
        path: "/product-detail",
        element: <ProductDetail />,
      },
    ],
  },
]);

export default router;
