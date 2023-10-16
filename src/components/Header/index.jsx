import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import "./style.css";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { NAVBAR_TITLE } from "../../constant/constant";
export default function Header() {
  const [isShowSearchForm, setIsShowSearchForm] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(false);

  const toggleMenu = () => {
    setIsShowMenu(!isShowMenu);
    setIsShowSearchForm(false); // Ẩn ô tìm kiếm khi hiển thị menu
  };

  const toggleSearch = () => {
    setIsShowSearchForm(!isShowSearchForm);
    setIsShowMenu(false); // Ẩn menu khi hiển thị ô tìm kiếm
  };

  return (
    <header className="header">
      <Link to="/" className="logo">
        LOGO
      </Link>

      <nav className={`navbar ${isShowMenu ? "active" : ""}`}>
        <Link to="/">{NAVBAR_TITLE.home}</Link>
        <a href="#about">{NAVBAR_TITLE.about}</a>
        <a href="#products">{NAVBAR_TITLE.products}</a>
        <a href="#review">{NAVBAR_TITLE.review}</a>
        <a href="#contact">{NAVBAR_TITLE.contact}</a>
      </nav>

      <div className="icon">
        <MenuOutlinedIcon className="iconItem menuBtn" onClick={toggleMenu} />
        <SearchOutlinedIcon className="iconItem" onClick={toggleSearch} />
        <ShoppingBagOutlinedIcon className="iconItem" />
        <AccountCircleOutlinedIcon className="iconItem" />
      </div>
      <form
        action=""
        className={`searchForm ${isShowSearchForm ? "active" : ""}`}
      >
        <input type="search" id="searchBox" placeholder={NAVBAR_TITLE.search} />
        <label htmlFor="searchBox">
          <span className="searchIcon">
            <SearchOutlinedIcon />
          </span>
        </label>
      </form>
    </header>
  );
}
