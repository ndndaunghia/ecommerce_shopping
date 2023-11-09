import React from "react";
import "./style.css";

export default function CategoryItem({ image, title }) {
  return (
    <div className="categoryContainer">
      <div className="categoryImgWrapper">
        <img src={image} alt="" className="categoryImg" />
      </div>
      <div className="categoryTitleWrapper">
        <p className="categoryTitle">{title}</p>
      </div>
    </div>
  );
}
