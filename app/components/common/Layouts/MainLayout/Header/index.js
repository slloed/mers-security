import React from "react";
import TopHeadContainer from "./containers/TopHeadContainer";
import MiddleHeadContainer from "./containers/MiddleHeadContainer";
import LowerHeadContainer from "./containers/LowerHeadContainer";

const Header = () => {
  return (
    <div>
      <TopHeadContainer />
      <MiddleHeadContainer />
      <LowerHeadContainer />
    </div>
  );
};

export default Header;
