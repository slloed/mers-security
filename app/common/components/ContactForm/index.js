import React from "react";
import {
  Box,
  FormControl,
  FormHelperText,
  Input,
  OutlinedInput,
  useFormControl,
} from "@material-ui/core";
import styles from "./styles.module.scss";
import DefaultButton from "../DefaultButton/DefaultButton";

const ContactForm = () => {
  return (
    <Box className={styles.formWrapper}>
      <Box className={styles.left}>
        <h3>Есть вопросы? Закажите звонок</h3>
        <Box component="form" className={styles.formInput}>
          <OutlinedInput placeholder="Please enter text" />
          <OutlinedInput placeholder="Please enter text" />
        </Box>
        <DefaultButton />
      </Box>
      <Box className={styles.right}>
        <h3> Свяжитесь с нами </h3>
        <p>телефон для связи</p>
        <p>
          +7 (495) 660-9222 <br />
          +7 (495) 507-3232
        </p>
        <p>Пн-Пт: 9:00-18:00</p>
        <p>телефон для связи</p>
        <p>
          +7(903) 521-58-37 <br />
          Пн-Вс: 10:00-19:00
        </p>
        <p>Email:</p>
        <p>mepc@mepc.ru</p>
      </Box>
    </Box>
  );
};

export default ContactForm;
