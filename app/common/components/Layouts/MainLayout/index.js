import React from "react";
import Header from "./Header";
import FooterLayout from "./Footer/components/FooterLayout";
import FooterContainer from "./Footer/containers/FooterContainer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <FooterContainer />
    </>
  );
};

export default MainLayout;
