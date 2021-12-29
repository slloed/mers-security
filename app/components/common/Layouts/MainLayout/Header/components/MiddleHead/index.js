import React from "react";
import Image from "next/image";
import Wrapper from "../../../../../Wrapper/index";
import logo from "../../../../../../../assets/images/logo.svg";
import cart from "../../../../../../../assets/images/cart.svg";
import search from "../../../../../../../assets/images/search.svg";
import { Box, InputBase, Typography } from "@material-ui/core";
import styles from "./styles.module.scss";

import Link from "next/link";
const MiddleHead = () => {
  return (
    <Wrapper className={styles.wrapper}>
      <Link href="/">
        <Image src={logo} alt="logo" />
      </Link>
      <Box className={styles.search}>
        <InputBase className={styles.input} placeholder={"Поиск..."} />
        <Image src={search} alt="" />
      </Box>
      <Box className={styles.cart}>
        <Image src={cart} alt="cart" />
        <span>Корзина</span>
      </Box>
    </Wrapper>
  );
};

export default MiddleHead;
