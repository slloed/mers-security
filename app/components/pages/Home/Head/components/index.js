import React from "react";
import { Box } from "@material-ui/core";
import DefaultButton from "../../../../common/DefaultButton/DefaultButton";
import Wrapper from "../../../../common/Wrapper";
import styles from "./styles.module.scss";

const Head = () => {
  return (
    <Box className={styles.background}>
      <Wrapper className={styles.wrapper}>
        <Box className={styles.textBlock}>
          <h1>Большой выбор автосигнализаций и дополнительного оборудования</h1>
          <p>
            Мерс-секьюрити — это поставщик автомобильных охранных и
            противоугонных систем.
          </p>
          <DefaultButton style={{ width: 238, height: 50 }}>
            Открыть каталог
          </DefaultButton>
        </Box>
      </Wrapper>
    </Box>
  );
};

Head.propTypes = {};

export default Head;
