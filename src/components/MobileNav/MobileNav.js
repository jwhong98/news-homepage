import React from "react";
import ReactDOM from "react-dom";
import classes from "./MobileNav.module.css";
import close from "../../assets/images/icon-menu-close.svg";

const Drop = (props) => {
  return <div className={classes.backdrop} onClick={props.onToggle}></div>;
};

const MobileNav = (props) => {
  const portalElement = document.getElementById("overlay");
  return (
    <>
      {ReactDOM.createPortal(
        <>
          <Drop onToggle={props.onToggle} />
          <nav className={classes.mobileNav}>
            <img
              className={classes.close}
              src={close}
              alt="close-icon"
              onClick={props.onToggle}
            />
            <ul className={classes.mobileNav__navList}>
              <li className={classes.mobileNav__navList__item}>
                <a href="/">Home</a>
              </li>
              <li className={classes.mobileNav__navList__item}>
                <a href="/">New</a>
              </li>
              <li className={classes.mobileNav__navList__item}>
                <a href="/">Popular</a>
              </li>
              <li className={classes.mobileNav__navList__item}>
                <a href="/">Trending</a>
              </li>
              <li className={classes.mobileNav__navList__item}>
                <a href="/">Categories</a>
              </li>
            </ul>
          </nav>
        </>,
        portalElement
      )}
    </>
  );
};

export default MobileNav;
