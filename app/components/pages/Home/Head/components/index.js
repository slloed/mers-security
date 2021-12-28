import React from "react";
import Link from 'next/link';
import { Box } from "@material-ui/core";
import DefaultButton from "../../../../common/DefaultButton/DefaultButton";
import Wrapper from "../../../../common/Wrapper";
import styles from "./styles.module.scss";

const Head = () => {
  return (
    <div className={styles.background}>
      <Wrapper className={styles.wrapper}>
        <Box className={styles.textBlock}>
          <h1>Большой выбор автосигнализаций и дополнительного оборудования</h1>
          <h2 className={styles.subheading}>
            Мерс-секьюрити — это поставщик автомобильных охранных и
            противоугонных систем.
          </h2>
          <div className={styles["links-container"]}>
            <Link href="/">
              <a className={styles["main-link"]}>
                Открыть каталог
              </a>
            </Link>
            <Link href="/">
              <a className={styles["alternate-link"]}>
                Открыть каталог товаров с бесплатной доставкой
              </a>
            </Link>
          </div>
        </Box>
      </Wrapper >
    </div >
  );
};

Head.propTypes = {};

export default Head;
