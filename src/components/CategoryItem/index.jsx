import React from "react";
import "./style.css";

export default function CategoryItem({ image, title }) {
  return (
    <div className="categoryContainer">
      <a href="">
        <div className="categoryImgWrapper">
          <img src={image} alt="" className="categoryImg" />
        </div>
      </a>
      <div className="categoryTitleWrapper">
        <p className="categoryTitle">
          <a href="">{title}</a>
        </p>
      </div>
    </div>
  );
}
