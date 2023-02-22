import React from "react";
import classes from "./TopThree.module.css";
import retro from "../../assets/images/image-retro-pcs.jpg";
import laptops from "../../assets/images/image-top-laptops.jpg";
import growth from "../../assets/images/image-gaming-growth.jpg";

const TopThree = () => {
  return (
    <section className={classes.topThree}>
      <div className={classes.topThree__entry}>
        <img src={retro} alt="" />
        <div className={classes.textWrap}>
          <p className={classes.textWrap__number}>01</p>
          <p className={classes.textWrap__title}>Reviving Retro PCs</p>
          <p className={classes.textWrap__description}>
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </div>
      <div className={classes.topThree__entry}>
        <img src={laptops} alt="" />
        <div className={classes.textWrap}>
          <p className={classes.textWrap__number}>02</p>
          <p className={classes.textWrap__title}>Top 10 Laptops of 2022</p>
          <p className={classes.textWrap__description}>
            Out best picks for various needs and budgets.
          </p>
        </div>
      </div>
      <div className={classes.topThree__entry}>
        <img src={growth} alt="" />
        <div className={classes.textWrap}>
          <p className={classes.textWrap__number}>03</p>
          <p className={classes.textWrap__title}>The Growth of Gaming</p>
          <p className={classes.textWrap__description}>
            How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TopThree;
