import React from "react";
import { Box, Typography } from "@material-ui/core";
import styles from "./styles.module.scss";
import Link from "next/link";

const Block = ({ children, color, linkTitle, to }) => {
  return (
    <Box className={styles.block} style={{ backgroundColor: `${color}` }}>
      <Link href={{ to }}>
        <a className={styles.link}>{linkTitle}</a>
      </Link>
      {children}
    </Box>
  );
};

export default Block;
