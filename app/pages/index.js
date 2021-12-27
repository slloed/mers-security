import React from "react";
import Head from "../components/pages/Home/Head/components";
import MenuContainer from "../components/pages/Home/Menu/containers/MenuContainer";
import RecommendationsContainer from "../components/pages/Home/Recommendations/containers/RecommendationsContainer";
import ArticlesContainer from "../components/pages/Home/Articles/containers/ArticlesContainer";
import ProductContainer from "../components/pages/Home/Product/containers/ProductContainer";
import FeedbackContainer from "../components/pages/Home/Feedback/containers/FeedbackContainer";
import ContactUsContainer from "../components/pages/Home/ContactUs/containers/ContactUsContainer";

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
