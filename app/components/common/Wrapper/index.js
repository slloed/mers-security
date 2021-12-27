import React from "react";
import PropTypes from "prop-types";

import { Container } from "@material-ui/core";

const Wrapper = ({ children, className }) => {
  return (
    <Container className={className} maxWidth="xl">
      {children}
    </Container>
  );
};

Container.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Wrapper;
