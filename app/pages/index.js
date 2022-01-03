import React from "react";
import Head from "../common/pages/Home/Head/components";
import MenuContainer from "../common/pages/Home/Menu/containers/MenuContainer";
import RecommendationsContainer from "../common/pages/Home/Recommendations/containers/RecommendationsContainer";
import ArticlesContainer from "../common/pages/Home/Articles/containers/ArticlesContainer";
import ProductContainer from "../common/pages/Home/Product/containers/ProductContainer";
import FeedbackContainer from "../common/pages/Home/Feedback/containers/FeedbackContainer";
import ContactUsContainer from "../common/pages/Home/ContactUs/containers/ContactUsContainer";

const Home = () => {
  return (
    <>
      <Head />
      <MenuContainer />
      <RecommendationsContainer />
      <ArticlesContainer />
      <ProductContainer />
      <FeedbackContainer />
      <ContactUsContainer />
    </>
  );
};

export default Home;
