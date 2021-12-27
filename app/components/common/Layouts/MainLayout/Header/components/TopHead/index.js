import { AppBar, Box, Toolbar } from "@material-ui/core";
import PropTypes from "prop-types";
import { v4 as uuid4 } from "uuid";
import Link from "next/link";
import location from "../../../../../../../assets/images/location.svg";
import styles from "./styles.module.scss";
import Image from "next/image";

const TopHead = ({ links, contacts }) => {
  return (
    <AppBar className={styles.top} position="static">
      <Toolbar className={styles.tool}>
        <Box className={styles.title}>
          <Image src={location} alt="location" />
          Москва, Митино
        </Box>
        <Box className={styles.linksContainer}>
          {links.map((link) => (
            <Link key={uuid4()} href={link.destination}>
              <a className={styles.link}>{link.name}</a>
            </Link>
          ))}
        </Box>
        <Box className={styles.contacts}>{contacts.map((value) => value)}</Box>
      </Toolbar>
    </AppBar>
  );
};

TopHead.propTypes = {
  contacts: PropTypes.array.isRequired,
  links: PropTypes.array.isRequired,
};

export default TopHead;
