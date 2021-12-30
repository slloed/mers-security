import Image from "next/image";
import Wrapper from "../../components/common/Wrapper";
import { about, philosophy, storyPoints } from "../../components/pages/About/data";
import picture from "../../assets/images/about.jpg";
import picture2 from "../../assets/images/about2.jpg";
import styles from "./styles.module.scss";

const About = () => {
  return (
    <Wrapper>
      <h2 className={styles.heading}>О компании “Мерс Секьюрити”</h2>
      <section className={styles.section}>
        <Image src={picture} alt="logo" width="700" height="460" />
        <h3 className={styles["section-heading"]}>О компании</h3>
        {about.map(paragraph =>
          <div>
            {paragraph}
          </div>
        )}
      </section>
      <section className={styles.section}>
        <Image src={picture2} alt="logo" width="700" height="460" />
        <h3 className={styles["section-heading"]}>Философия компании</h3>

        {philosophy.map(paragraph =>
          <div>
            {paragraph}
          </div>
        )}

      </section>
      <section className={styles["history-section"]}>
        <h3 className={styles["section-heading"]}>История развития компании</h3>
        <div className={styles["history-grid"]}>
          {
            storyPoints.map(point =>
              <div className={styles["history-point"]}>
                <div className={styles.year}>{point.year}</div>
                <div className={styles.description}>{point.description}</div>
              </div>
            )
          }
        </div>
      </section>
    </Wrapper >
  )
};

export default About;
