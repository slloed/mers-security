import React from "react";
import PropTypes from "prop-types";

import Wrapper from "../../../../../Wrapper/index";
import styles from "./styles.module.scss";
import { Fade, Menu, MenuItem, MenuList } from "@material-ui/core";
import { list } from "./list";

const LowerHead = ({ anchorEl, open, handleClick, handleClose }) => {
  return (
    <Wrapper className={styles.wrapper}>
      <ul className={styles.list}>
        {list.map((link, id) => (
          <>
            <li
              onMouseEnter={handleClick}
              aria-controls={open ? "fade-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              key={link.name}
            >
              {link.name}
            </li>
            <Menu
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
              onClick={() => console.log(link)}
            >
              {list.map((smth, id) => (
                <MenuItem>{Object.values(smth.catalogue)}</MenuItem>
              ))}
            </Menu>
          </>
        ))}
      </ul>
    </Wrapper>
  );
};

LowerHead.propTypes = {
  links: PropTypes.array.isRequired,
};

export default LowerHead;
