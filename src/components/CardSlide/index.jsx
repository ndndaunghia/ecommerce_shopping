import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProductCard from "../ProductCard";
import axios from "axios";
import "./style.css";
import { GET_TSHIRT_PRODUCTS } from "../../constant/api";
import { Link } from "react-router-dom";

export default function CardSlide() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(GET_TSHIRT_PRODUCTS)
      .then((res) => {
        setProduct(res.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const settings = {
    // infinite: true,
    speed: 4000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    initialSlide: 0,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {product.map((item, index) => {
          return (
            <Link to={`product-detail/${item._id}`} key={item._id}>
              <ProductCard
                name={item.name}
                image={item.images[0].url}
                subImage={item.images[1].url}
                price={item.price}
                offerPrice={item.offerPrice}
              />
            </Link>
          );
        })}
      </Slider>
    </>
  );
}
