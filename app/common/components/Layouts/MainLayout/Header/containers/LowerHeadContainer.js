import React, { useState } from "react";
import LowerHead from "../components/LowerHead";

const LowerHeadContainer = () => {
  const [isShowSubMenu, setIsShowSubMenu] = useState(false);

  const toggleIsOpenSubMenu = () => setIsShowSubMenu((prevState) => !prevState);

  return (
    <LowerHead
      toggleIsOpenSubMenu={toggleIsOpenSubMenu}
      isShowSubMenu={isShowSubMenu}
    />
  );
};

export default LowerHeadContainer;
