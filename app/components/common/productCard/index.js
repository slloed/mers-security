import React from "react";
import Image from "next/image";
import common from "../../../assets/images/logo.svg";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import { Box } from "@material-ui/core";
import DefaultButton from "../DefaultButton/DefaultButton";

const ProductCard = ({ img, alt, productName, price }) => {
  return (
    <Box className={styles.card}>
      <Image src={img || common} alt={alt} />
      <p>{productName}</p>
      <p>{price}</p>
      <DefaultButton />
    </Box>
  );
};

ProductCard.propTypes = {};

export default ProductCard;
