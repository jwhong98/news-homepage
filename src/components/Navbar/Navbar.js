import React from "react";
import classes from "./Navbar.module.css";
import hamburger from "../../assets/images/icon-menu.svg";

const Navbar = (props) => {
  return (
    <nav>
      <img
        className={classes.hamburger}
        src={hamburger}
        alt=""
        onClick={props.onToggle}
      />
      <ul className={classes.navList}>
        <li className={classes.navList__listItem}>
          <a href="/">Home</a>
        </li>
        <li className={classes.navList__listItem}>
          <a href="/">New</a>
        </li>
        <li className={classes.navList__listItem}>
          <a href="/">Popular</a>
        </li>
        <li className={classes.navList__listItem}>
          <a href="/">Trending</a>
        </li>
        <li className={classes.navList__listItem}>
          <a href="/">Categories</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
