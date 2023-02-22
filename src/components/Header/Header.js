import React from "react";
import classes from "./Header.module.css";
import logo from "../../assets/images/logo.svg";
import Navbar from "../Navbar/Navbar";

const Header = (props) => {
  return (
    <header>
      <div className={classes.headerWrap}>
        <img src={logo} alt="logo" />
        <Navbar onToggle={props.onToggle} />
      </div>
    </header>
  );
};

export default Header;
