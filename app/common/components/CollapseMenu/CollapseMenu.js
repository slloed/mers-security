import styles from "./styles.module.scss";
import combineCss from "../../helpers/combineCss";
import Collapse from "@mui/material/Collapse";

import Link from "next";

const CollapseMenu = ({ subMenu, isOpen, pathName, toggleMenu }) => {
  const isActiveItem = (link) => pathName === link;

  return (
    <Collapse isOpened={isOpen}>
      {subMenu.map(({ link, name }) => (
        <Link
          key={`sub-menu-${link}`}
          className={combineCss(
            styles.item,
            isActiveItem(link) ? styles.active : ""
          )}
          onClick={toggleMenu}
        >
          <a href={link}>
            <p
              className={combineCss(
                styles.title,
                isActiveItem(link) ? styles.active : ""
              )}
            >
              {name}
            </p>
          </a>
        </Link>
      ))}
    </Collapse>
  );
};

export default CollapseMenu;
