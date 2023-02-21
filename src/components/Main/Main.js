import React from "react";
import MainNews from "../MainNews/MainNews";
import New from "../New/New";
import classes from "./Main.module.css";

const Main = () => {
  return (
    <main>
      <div className={classes.top}>
        <MainNews />
        <New />
      </div>
    </main>
  );
};

export default Main;
