import Wrapper from "../../components/common/Wrapper";
import styles from "./styles.module.scss"

const Conditions = () => {
  return (
    <Wrapper>
      <section className={styles["section"]}>
        <h2 className={styles["section-heading"]}>Условия оплаты и доставки</h2>
        <h3 className={styles["subheading"]}>Как оплатить?</h3>
        <ul>
          <li className={styles["option"]}>Наличными курьеру</li>
          <li className={styles["option"]}>Оплата банковской картой на сайте</li>
          <li className={styles["option"]}>Безналичная оплата при выставлении счёта</li>
        </ul>
      </section>
      <section className={styles["section"]}>
        <h2 className={styles["section-heading"]}>Стоимость доставки</h2>
        <div className={styles["delivery-options"]}>
          <div className={styles["delivery-option"]}>
            <h4>По Москве в пределах МКАД:</h4>
            <ul>
              <li>При заказе на сумму <b>3 000 рублей</b>, стоимость доставки - <b>300 рублей.</b></li>
              <li>При заказе на сумму от <b>10 000 рублей</b>, доставка осуществляется <b>бесплатно.</b></li>
            </ul>
          </div >
          <div className={styles["delivery-option"]}>
            <h4> По Москве, за пределы МКАД:</h4>
            <ul>
              <li>За пределы МКАД <b>от 0 до 5 км</b>, стоимость доставки <b>450 руб.</b></li>
              <li>За пределы МКАД <b>от 5 до 10 км</b>, стоимость доставки <b>600 руб.</b></li>
              <li>За пределы МКАД <b>от 10 до 20 км</b>, стоимость доставки <b>30 руб каждый 1 км.</b></li>
              <li>За пределы МКАД <b>свыше 20 км</b>, стоимость доставки <b>60 руб каждый 1 км.</b></li>
            </ul>
          </div>
          <div className={styles["delivery-option"]}>
            <h4>Доставка по России:</h4>
            <p>
              Доставка в города России осуществляется с помощью транспортных компаний СДЭК, ДЕЛОВЫЕ ЛИНИИ, ПЭК и других ТК по выбору клиента.
            </p>
            <ul>
              <li>При заказе <b>до 10 000 рублей</b>, стоимость доставки <b>300 рублей.</b></li>
              <li>При заказе <b>от 10 000 рублей</b>, стоимость доставки осуществляется <b>бесплатно.</b></li>
            </ul>
            <ul>
              <li><b>Оплату за доставку товара транспортной компании осуществляет покупатель.</b></li>
              <li><b>Доставка в регионы Росии осуществляется при 100% предоплате.</b></li>
            </ul>
          </div>
        </div >
      </section >
    </Wrapper >
  )
};

export default Conditions;
