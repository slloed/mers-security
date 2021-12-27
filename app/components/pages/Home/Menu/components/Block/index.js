import React from "react";
import { Box, Typography } from "@material-ui/core";
import styles from "./styles.module.scss";
import Link from "next/link";

const Block = ({ children, color, linkTitle, to }) => {
  return (
    <Box className={styles.block} style={{ backgroundColor: `${color}` }}>
      <Typography className={styles.link}>
        <Link href={{ to }}>
          <a>{linkTitle}</a>
        </Link>
      </Typography>
      {children}
    </Box>
  );
};

export default Block;
