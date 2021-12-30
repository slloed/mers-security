import React, { useState } from "react";
import LowerHead from "../components/LowerHead";

const LowerHeadContainer = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <LowerHead
      anchorEl={anchorEl}
      setAnchorEl={setAnchorEl}
      open={open}
      handleClick={handleClick}
      handleClose={handleClose}
    />
  );
};

export default LowerHeadContainer;
