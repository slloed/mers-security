import React from "react";
import PropTypes from "prop-types";
import { Avatar, Box } from "@material-ui/core";
import styles from "./styles.module.scss";
import Rating from "@material-ui/lab/Rating";
import Link from "next/link";
const Feedback = ({ author, productName, description, className }) => {
  return (
    <div className={`${className} ${styles.feedbackBlock}`}>
      <Avatar className={styles.avatar} />
      <div>
        <h3 className={styles.author}>{author}</h3>
        <p className={styles.productName}>отзыв на товар {productName}</p>
        <p>{description}</p>
      </div>

      <Rating name="read-only" value={5} readOnly className={styles.rating} />
    </div>
  );
};

Feedback.propTypes = {};

export default Feedback;
