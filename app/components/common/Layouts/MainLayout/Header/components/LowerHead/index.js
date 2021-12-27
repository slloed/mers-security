import React from "react";
import PropTypes from "prop-types";

import Wrapper from "../../../../../Wrapper/index";
import styles from "./styles.module.scss";

const LowerHead = ({ links }) => {
  return (
    <Wrapper className={styles.wrapper}>
      <ul className={styles.list}>
        {links.map((link) => (
          <li>{link.name}</li>
        ))}
      </ul>
    </Wrapper>
  );
};

LowerHead.propTypes = {
  links: PropTypes.array.isRequired,
};

export default LowerHead;
