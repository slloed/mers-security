import React from "react";
import Wrapper from "../../../../../components/Wrapper";
import { Grid, Box } from "@material-ui/core";
import styles from "./styles.module.scss";
import Block from "../Block";
import Link from "next/link";

const MenuLayout = () => {
  return (
    <Wrapper className={styles.wrapper}>
      <div className={styles["grid"]}>
        <div className={`${styles.block} ${styles.first}`}>
          <h3 className={styles.title}>Наш ассортимент более 1000 товаров</h3>
          <Link href="/">
            <a className={styles.open}>Открыть весь каталог</a>
          </Link>
        </div>
        <div className={`${styles.block} ${styles.blue}`}>
          <Link href="/">
            <a className={styles.link}>Брелоки</a>
          </Link>
        </div>
        <div className={`${styles.block} ${styles.light}`}>
          <Link href="/">
            <a className={styles.link}>Шумоизоляция</a>
          </Link>
        </div>
        <div className={`${styles.block} ${styles.gray}`}>
          <Link href="/">
            <a className={`${styles.link} ${styles["text-light"]}`}>Автосвет</a>
          </Link>
        </div>
      </div>
      <div className={styles["grid"]}>
        <div
          className={`${styles.block} ${styles.light} ${styles["links-list"]}`}
        >
          <Link href="/">
            <a className={styles.link}>Стеклоподъёмники</a>
          </Link>
          <Link href="/">
            <a className={styles.link}>Автокомпрессоры</a>
          </Link>
          <Link href="/">
            <a className={styles.link}>Интерфейсы стёкол</a>
          </Link>
          <Link href="/">
            <a className={styles.link}>Камеры заднего вида</a>
          </Link>
          <Link href="/">
            <a className={styles.link}>Расходные материалы</a>
          </Link>
        </div>
        <div className={`${styles.block} ${styles.gray}`}>
          <Link href="/">
            <a className={`${styles.link} ${styles["text-light"]}`}>
              Автосигнализации
            </a>
          </Link>
        </div>
        <div className={`${styles.block} ${styles.blue}`}>
          <Link href="/">
            <a className={styles.link}>Видеорегистраторы</a>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

MenuLayout.propTypes = {};

export default MenuLayout;
