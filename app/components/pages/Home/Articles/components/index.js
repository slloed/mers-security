import React from "react";
import PropTypes from "prop-types";
import ArticleCard from "../../../../common/ArticleCard";
import first from "../../../../../assets/images/articles/tes.jpg";
import second from "../../../../../assets/images/articles/big-test.jpg";
import Wrapper from "../../../../common/Wrapper";

const ArticlesLayout = () => {
  return (
    <Wrapper>
      <ArticleCard left image={first} bigImage={second} text={"ldlldldldld"} />
      <ArticleCard image={first} bigImage={second} text={"ldlldldldld"} />
    </Wrapper>
  );
};

ArticlesLayout.propTypes = {};

export default ArticlesLayout;
