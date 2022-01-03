import React from "react";
import PropTypes from "prop-types";
import Wrapper from "../../../../../Wrapper";
import styles from "./styles.module.scss";
import { data } from "./list";
import { v4 as uuid4 } from "uuid";
import CollapseMenu from "../../../../../CollapseMenu/CollapseMenu";

const LowerHead = ({ isShowSubMenu }) => {
  return (
    <Wrapper className={styles.wrapper}>
      <ul className={styles.list}>
        {data.map(({ name, categories }) => (
          <li key={uuid4()}>
            <span>{name}</span>
            {categories && (
              <CollapseMenu subMenu={categories} isOpen={isShowSubMenu} />
            )}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

LowerHead.propTypes = {
  links: PropTypes.array.isRequired,
};

export default LowerHead;
