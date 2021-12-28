import React from "react";
import PropTypes from "prop-types";
import Wrapper from "../../../../common/Wrapper";
import Feedback from "../../../../common/Feedback";
import { data } from "./data";
import { Box } from "@material-ui/core";
import styles from "./styles.module.scss";

const FeedbackLayout = () => {
  return (
    <Wrapper>
      <Box className={styles.comments}>
        <h3>Отзывы наших покупателей</h3>
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
