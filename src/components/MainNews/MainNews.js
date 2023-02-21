import React from "react";
import classes from "./MainNews.module.css";
import mobileImg from "../../assets/images/image-web-3-mobile.jpg";
import desktopImg from "../../assets/images/image-web-3-desktop.jpg";

const MainNews = () => {
  return (
    <section className={classes.mainContainer}>
      <img
        className={classes.mainImg}
        srcSet={`
      ${mobileImg} 768w, ${desktopImg} 1460w`}
        sizes="(max-width: 450px), (max-width: 730px)"
        alt=""
      />
      <div className={classes.content}>
        <div className={classes.content__text}>
          <h1>The Bright Future of Web 3.0?</h1>
        </div>
        <div className={classes.content__text}>
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is is
            really fulfilling its promise?
          </p>
          <button>READ MORE</button>
        </div>
      </div>
    </section>
  );
};

export default MainNews;
