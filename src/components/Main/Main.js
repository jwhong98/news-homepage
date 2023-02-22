import React from "react";
import MainNews from "../MainNews/MainNews";
import New from "../New/New";
import TopThree from "../TopThree/TopThree";
import classes from "./Main.module.css";

const Main = () => {
  return (
    <main>
      <div className={classes.top}>
        <MainNews />
        <New />
      </div>
      <div className={classes.bottom}>
        <TopThree />
      </div>
    </main>
  );
};

export default Main;
