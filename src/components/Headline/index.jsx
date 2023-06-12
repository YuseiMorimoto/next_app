import React from "react";
import classes from "src/components/Headline/Headline.module.css";

export function Headline(props) {
  return (
    <div>
      <h1 className={classes.title}>
        <a href="https://nextjs.org">{props.page} Page</a>
      </h1>

      <p className={classes.description}>
        アイテムの数は {props.children} 個です
      </p>

      <button onClick={props.handleReduce}>減らす</button>
    </div>
  );
}
