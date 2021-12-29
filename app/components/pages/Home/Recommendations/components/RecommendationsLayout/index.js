import React from "react";
import PropTypes from "prop-types";
import Wrapper from "../../../../../common/Wrapper";
import ProductCard from "../../../../../common/ProductCard";
import styles from "./styles.module.scss"
import { data } from "./data";
import { v4 as uuid4 } from "uuid";
const RecommendationsLayout = () => {
  return (
    <Wrapper style={{ marginBottom: 91 }}>
      <div className={styles.grid}>
        <h2 className={styles.title}>
          Рекомендуемые товары 2021
        </h2>
        {data.map((card) => (
          <ProductCard
            productName={card.productName}
            price={card.price}
            img={card.img}
            alt={card.alt}
            key={uuid4()}
          />
        ))}
      </div>
    </Wrapper>
  );
};

RecommendationsLayout.propTypes = {};

export default RecommendationsLayout;
