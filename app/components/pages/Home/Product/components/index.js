import React from "react";
import PropTypes from "prop-types";
import Wrapper from "../../../../common/Wrapper";
import { Box, Button, Typography } from "@material-ui/core";
import styles from "./styles.module.scss";
import Image from "next/image";
import product from "../../../../../assets/images/home/product.png";

const Product = () => {
  return (
    <Wrapper className={styles.wrapper}>
      <Box className={styles.box}>
        <article>
          <h3>Элитные противоугонные комплексы StarLine</h3>

          <p>
            Используются для защиты дорогих транспортных средств, отличаются
            высокой надежностью и простотой в управлении.
          </p>
          <p>
            В основе – современная автосигнализация StarLine D94 2CAN GSM/GPS
            2Slave с широчайшими противоугонными возможностями.
          </p>

          <p> цена от</p>
          <Button className={styles.button} variant={"contained"}>
            {" "}
            28.300 RUB
          </Button>
        </article>
        <Box className={styles.imageBlock}>
          <Image className={styles.image} src={product} />
        </Box>
      </Box>
    </Wrapper>
  );
};

Product.propTypes = {};

export default Product;
