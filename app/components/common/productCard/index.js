import React from "react";
import Image from "next/image";
import common from "../../../assets/images/logo.svg";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import { Box, Link } from "@material-ui/core";
import DefaultButton from "../DefaultButton/DefaultButton";

const ProductCard = ({ img, alt, productName, price }) => {
  return (
    <div className={styles.card}>
      <Image src={img || common} alt={alt} />
      <h4 className={styles.name}>{productName}</h4>
      <span className={styles.price}>{price} руб.</span>
      <DefaultButton>Добавить в корзину</DefaultButton>
      <Link>
        <a className={styles.link}>Посмотреть товар</a>
      </Link>
    </div>
  );
};

ProductCard.propTypes = {};

export default ProductCard;
