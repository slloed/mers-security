import React from "react";
import PropTypes from "prop-types";
import Wrapper from "../../../../components/Wrapper";
import Feedback from "../../../../components/Feedback";
import { data } from "./data";
import { Box } from "@material-ui/core";
import styles from "./styles.module.scss";
import Link from "next/link";

const FeedbackLayout = () => {
  return (
    <Wrapper>
      <Box className={styles.comments}>
        <div className={styles.block}>
          <h3 className={styles.title}>Отзывы наших покупателей</h3>
          <Link href="/">
            <a className={styles.open}>Посмотреть следующие отзывы</a>
          </Link>
        </div>
        <Box>
          {data.map((card) => (
            <Feedback
              key={card.product}
              className={styles.feedback}
              description={card.description}
              author={card.author}
              productName={card.product}
            />
          ))}
        </Box>
      </Box>
    </Wrapper>
  );
};

FeedbackLayout.propTypes = {};

export default FeedbackLayout;
