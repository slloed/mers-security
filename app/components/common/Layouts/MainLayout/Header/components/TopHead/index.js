import PropTypes from "prop-types";
import { v4 as uuid4 } from "uuid";
import Link from "next/link";
import location from "../../../../../../../assets/images/location.svg";
import styles from "./styles.module.scss";
import Image from "next/image";
import Wrapper from "../../../../../Wrapper/index";

const TopHead = ({ links, contacts }) => {
  return (
    <div className={styles.top}>
      <Wrapper className={styles.tool}>
        <div className={styles.title}>
          <Image src={location} alt="location" />
          <span>Москва, Митино</span>
        </div>
        <div className={styles.linksContainer}>
          {links.map((link) => (
            <Link key={uuid4()} href={link.destination}>
              <a className={styles.link}>{link.name}</a>
            </Link>
          ))}
        </div>
        <div className={styles.contacts}>{contacts.map((value) => value)}</div>
      </Wrapper>
    </div>
  );
};

TopHead.propTypes = {
  contacts: PropTypes.array.isRequired,
  links: PropTypes.array.isRequired,
};

export default TopHead;
