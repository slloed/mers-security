import React from "react";
import Wrapper from "../../../../../common/Wrapper";
import { Grid, Box } from "@material-ui/core";
import styles from "./styles.module.scss";
import Block from "../Block";

const MenuLayout = () => {
  return (
    <Wrapper className={styles.wrapper}>
      <Grid container spacing={0}>
        <Grid item xs={3} color={"green"}>
          <Block>lalal</Block>
        </Grid>
        <Grid item xs={3}>
          <Block
            to={"https://www.google.com"}
            linkTitle={"aaaaa"}
            color={"#E9F3FF"}
          ></Block>
        </Grid>
        <Grid item xs={3}>
          <Block
            to={"https://www.google.com"}
            linkTitle={"aaaaa"}
            color={"#E2E2E2"}
          ></Block>
        </Grid>
        <Grid item xs={3}>
          <Block
            to={"https://www.google.com"}
            linkTitle={"aaaaa"}
            color={"#656565"}
          ></Block>
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={4}>
          <Block
            to={"https://www.google.com"}
            linkTitle={"aaaaa"}
            color={"#E2E2E2"}
          ></Block>
        </Grid>
        <Grid item xs={4}>
          <Block
            to={"https://www.google.com"}
            linkTitle={"aaaaa"}
            color={"#656565"}
          ></Block>
        </Grid>
        <Grid item xs={4}>
          <Block
            to={"https://www.google.com"}
            linkTitle={"aaaaa"}
            color={"#E9F3FF"}
          ></Block>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

MenuLayout.propTypes = {};

export default MenuLayout;
