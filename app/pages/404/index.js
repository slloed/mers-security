
import Image from "next/image";
import notFoundImg from "../../assets/images/404.png";
import Wrapper from "../../components/common/Wrapper";
import styles from "./styles.module.scss";

const NotFound = () => {

  return (
    <Wrapper className={styles.container} >
      <Image src={notFoundImg} alt="Этот раздел сайта временно недоступен" width="1100" height="300" />
      <h1 className={styles.caption} >Этот раздел сайта временно недоступен.</h1>
    </Wrapper>
  )
};

export default NotFound;
