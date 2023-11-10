import banner1 from "../assets/image/b17.jpg";
import banner2 from "../assets/image/b10.jpg";
import banner3 from "../assets/image/b7.jpg";
import banner4 from "../assets/image/b4.jpg";
import banner5 from "../assets/image/b18.jpg";
import banner6 from "../assets/image/b2.jpg";

export const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

export const NAVBAR_TITLE = {
  home: "Home",
  about: "About",
  products: "Products",
  review: "Review",
  contact: "Contact",
  search: "Search here ...",
};

export const SECTION_TITLE = {
  category: "Category",
  trending: "Trending",
  reason: "About us",
};

export const COLOR = {
  primaryColor: "#088178",
  whiteColor: "#fff",
};

export const MEDIUM_BANNER_DATA = [
  {
    id: 1,
    title: "crazy deals",
    subTitle: "buy 1 get 1 free",
    content: "The best classic collection is on sale",
    btnTitle: "See more",
    image: banner1,
  },
  {
    id: 2,
    title: "spring/summer",
    subTitle: "upcomming season",
    content: "The best classic collection is on sale",
    btnTitle: "Collection",
    image: banner2,
  },
];

export const SMALL_BANNER_DATA = [
  {
    id: 1,
    title: "SEASONAL SALE",
    content: "Winter Collection -50% OFF",
    image: banner3,
  },
  {
    id: 2,
    title: "NEW COLLECTION",
    content: "Spring/Summer 2022",
    image: banner4,
  },
  {
    id: 3,
    title: "T-SHIRTS",
    content: "New Trendy Prints",
    image: banner5,
  },
];

export const SIGN_UP_BANNER_DATA = [
  {
    id: 1,
    title: "Sign Up For Newsletters",
    content: "Get E-mail updates about our latest shop and",
    subContent: "special offers.",
    image: banner6,
  },
];

export const GUIDANCE = [
  {
    id: 1,
    title: "Fast & Free Delivery",
    content: "Free delivery on all orders",
    image:
      "https://preview.colorlib.com/theme/capitalshop/assets/img/icon/services1.svg",
  },
  {
    id: 2,
    title: "Secure Payment",
    content: "Safe payment when you order",
    image:
      "https://preview.colorlib.com/theme/capitalshop/assets/img/icon/services2.svg",
  },
  {
    id: 3,
    title: "Money Back Guarantee",
    content: "Refund if product is defective",
    image:
      "https://preview.colorlib.com/theme/capitalshop/assets/img/icon/services3.svg",
  },
  {
    id: 4,
    title: "Online Support",
    content: "Support online 24/24",
    image:
      "https://preview.colorlib.com/theme/capitalshop/assets/img/icon/services4.svg",
  },
];

export const CATEGORY_IMAGE = [
  {
    id: 1,
    title: "T-shirt",
    image:
      "https://theme.hstatic.net/200000260587/1001126984/14/img_category_1.png?v=140",
    link: "T-shirt",
  },
  {
    id: 2,
    title: "Hoddie",
    image:
      "https://theme.hstatic.net/200000260587/1001126984/14/img_category_2.png?v=140",
    link: "Hoodie",
  },
  {
    id: 3,
    title: "Shirts",
    image:
      "https://theme.hstatic.net/200000260587/1001126984/14/img_category_3.png?v=140",
    link: "Shirt",
  },
  {
    id: 4,
    title: "Shorts",
    image:
      "https://theme.hstatic.net/200000260587/1001126984/14/img_category_4.png?v=140",
    link: "Shorts",
  },
];
