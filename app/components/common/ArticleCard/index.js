import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import { Box, Button, Modal, Typography } from "@material-ui/core";
import Image from "next/image.js";
const ArticleCard = ({ title, image, text, left, bigImage }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className={left ? styles.reverse : styles.block}>
        <div className={styles.article}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.text}>{text}</p>
          <Button
            className={styles.button}
            variant="outlined"
            onClick={handleOpen}
          >
            Читать полностью
          </Button>
        </div>
        <div className={styles.image} >
          <Image src={image} width="668" height="444" />
        </div>
      </div>
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
