import React from "react";
import PropTypes from "prop-types";
import { Box, Grid } from "@material-ui/core";
import styles from "./styles.module.scss";
import Wrapper from "../../../../../Wrapper";
import Image from "next/image";
import logo from "../../../../../../../assets/images/logo.svg";
import meguna from "../../../../../../../assets/images/meguna.png";
import { data } from "../../../Header/components/TopHead/data";
import Link from "next/link";
import { v4 as uuid4 } from "uuid";

const FooterLayout = () => {
  return (
    <Box className={styles.footer}>
      <Wrapper>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Image src={logo} />
          </Grid>
          <Grid item xs={10}>
            {data.map((link) => (
              <Link key={uuid4()} href={link.destination}>
                <a>{link.name}</a>
              </Link>
            ))}
          </Grid>
          <Grid item xs={3}>
            <Image className={styles.meguna} src={meguna} />
          </Grid>
          <Grid item xs={9}></Grid>
        </Grid>
      </Wrapper>
    </Box>
  );
};

FooterLayout.propTypes = {};

export default FooterLayout;
