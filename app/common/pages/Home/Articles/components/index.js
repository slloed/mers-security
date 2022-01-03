import React from "react";
import PropTypes from "prop-types";
import ArticleCard from "../../../../components/ArticleCard";
import first from "../../../../../assets/images/home/img1.png";
import second from "../../../../../assets/images/home/img2.png";
import Wrapper from "../../../../components/Wrapper";
import styles from "./styles.module.scss";

const ArticlesLayout = () => {
  return (
    <Wrapper className={styles.wrapper}>
      <ArticleCard
        image={first}
        bigImage={first}
        title="Противоугонные системы для автомобилей"
        text="Многие полагают, что авто сигнализации и противоугонные системы — 
        это синонимичные понятия, а говоря проще – одно и то же. На самом 
        деле, такое мнение и близко не соответствует действительности, так как автосигнализации являются лишь одним из видов противоугонных систем. Помимо авто сигнализаций, существуют и некоторые другие разновидности противоугонных систем, например..."
      />
      <ArticleCard
        left
        image={second}
        bigImage={second}
        title="Что нужно знать автолюбителю об угонах?"
        text="Покупка машины — дело приятное, но в то же время достаточно хлопотное. Когда проходит эйфория после удачного приобретения, перед новым автовладельцем неминуемо встают вопросы, где хранить машину, какому автосервису доверить её техническое обслуживание, каким бензином заправлять. Однако опыт показывает..."
      />
    </Wrapper>
  );
};

ArticlesLayout.propTypes = {};

export default ArticlesLayout;
