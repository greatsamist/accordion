import React from "react";
import data from "./data";
import Styles from "./Question.module.scss";

function Question() {
  return data.map((questions) => {
    const { id, title, info } = questions;
    return (
      <details className={Styles.container} key={id}>
        <summary>{title}</summary>
        <p>{info}</p>
      </details>
    );
  });
}

export default Question;
