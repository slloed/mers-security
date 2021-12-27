import React from "react";
import PropTypes from "prop-types";
import { Avatar, Box } from "@material-ui/core";
import styles from "./styles.module.scss";
import Rating from "@material-ui/lab/Rating";
import Link from "next";
const Feedback = ({ author, productName, description, className }) => {
  return (
    <Box className={`${className} ${styles.feedbackBlock}`}>
      <Avatar className={styles.avatar} />
      <p>{author}</p>
      <p>отзыв на товар </p> <p>{productName}</p>
      {description}
      <Rating name="read-only" value={5} readOnly />
    </Box>
  );
};

Feedback.propTypes = {};

export default Feedback;
