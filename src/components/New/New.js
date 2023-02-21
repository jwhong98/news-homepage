import React from "react";
import classes from "./New.module.css";

const New = () => {
  return (
    <section className={classes.new}>
      <div className={classes.new__content}>
        <h2>New</h2>
        <div className={classes.new__content__article}>
          <p className={classes.title}>Hydrogen VS Electric Cars</p>
          <p className={classes.description}>
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
        </div>
        <hr />
        <div className={classes.new__content__article}>
          <p className={classes.title}>The Downsides of AI Artistry</p>
          <p className={classes.description}>
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </div>
        <hr />
        <div className={classes.new__content__article}>
          <p className={classes.title}>Is VC Funding Drying Up?</p>
          <p className={classes.description}>
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
    </section>
  );
};

export default New;
