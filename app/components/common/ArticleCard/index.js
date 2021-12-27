import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import { Box, Button, Modal, Typography } from "@material-ui/core";
import Image from "next/image.js";
const ArticleCard = ({ image, text, left, bigImage }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box className={left ? styles.reverse : styles.block}>
        <Box className={styles.background}>
          <Typography>{text}</Typography>
          <Button
            className={styles.button}
            variant="outlined"
            onClick={handleOpen}
          >
            Читать полностью
          </Button>
        </Box>
        <Image className={styles.image} src={image} />
      </Box>
      <Modal open={open} onClose={handleClose} className={styles.modal}>
        <Box className={styles.modalBlock}>
          <Image src={bigImage} />
          {text}
        </Box>
      </Modal>
    </>
  );
};

ArticleCard.propTypes = {};

export default ArticleCard;
