import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import "./style.css";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import { NAVBAR_TITLE } from "../../constant/constant";
import { useDispatch } from "react-redux";
import { getSearchAsync } from "../../redux/search";
import logo from "../../assets/d3.png";
export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isShowSearchForm, setIsShowSearchForm] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isShowAccountMenu, setIsShowAccountMenu] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("token"));
  const [searchValue, setSearchValue] = useSearchParams();
  const [query, setQuery] = useState(searchValue.get("q") || "");

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.setItem("isLoggedIn", false);
    setIsLoggedIn(false);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    dispatch(getSearchAsync(query));
    navigate(`/search?${query}`);
    setQuery("");
    setIsShowSearchForm(!isShowSearchForm);
    setIsShowMenu(false); // Ẩn menu khi hiển thị ô tìm kiếm
  };

  const toggleMenu = () => {
    setIsShowMenu(!isShowMenu);
    setIsShowSearchForm(false); // Ẩn ô tìm kiếm khi hiển thị menu
  };

  const toggleSearch = () => {
    setIsShowSearchForm(!isShowSearchForm);
    setIsShowMenu(false); // Ẩn menu khi hiển thị ô tìm kiếm
  };

  const showAccountMenu = () => {
    setIsShowAccountMenu(!isShowAccountMenu);
  };

  useEffect(() => {}, [isLoggedIn]);
  return (
    <header className="header">
      <Link to="/" className="logo">
        <div style={{ width: "150px" }}>
          <img src={logo} alt="" style={{ width: "33%" }} />
        </div>
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
        <Link to="/cart">
          <ShoppingBagOutlinedIcon className="iconItem" />
        </Link>
        <AccountCircleOutlinedIcon
          className="iconItem"
          onClick={() => showAccountMenu()}
        />
        {isShowAccountMenu && (
          <div className="accountMenu">
            {isLoggedIn ? (
              <ul>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/all-orders">All Orders</Link>
                </li>
                <li>
                  <Link to="" onClick={() => logOut()}>
                    Logout
                  </Link>
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <Link to="/sign-up">Sign up</Link>
                </li>
                <li>
                  <Link to="/sign-in">Sign in</Link>
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
      <form
        action=""
        onSubmit={handleSearch}
        className={`searchForm ${isShowSearchForm ? "active" : ""}`}
      >
        <input
          type="search"
          id="searchBox"
          placeholder={NAVBAR_TITLE.search}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <label htmlFor="searchBox">
          <span className="searchIcon">
            <SearchOutlinedIcon />
          </span>
        </label>
      </form>
    </header>
  );
}
