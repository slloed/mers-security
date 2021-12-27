import React from "react";
import styles from "./styles.module.scss";

const DefaultButton = ({ children, className, style }) => {
  return (
    <button className={`${styles.button} ${className}`} style={style}>
      {children}
    </button>
  );
};

export default DefaultButton;
