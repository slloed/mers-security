import React from "react";
import PropTypes from "prop-types";
import Wrapper from "../../../../../common/Wrapper";
import ProductCard from "../../../../../common/productCard";
import { Grid } from "@material-ui/core";
import { data } from "./data";
import { v4 as uuid4 } from "uuid";
const RecommendationsLayout = () => {
  return (
    <Wrapper style={{ marginBottom: 91 }}>
      <Grid container spacing={0}>
        <Grid item xs={3} style={{ height: 419 }}>
          Рекомендуемые товары 2021
        </Grid>
        {data.map((card) => (
          <Grid item xs={3} key={uuid4()}>
            <ProductCard
              productName={card.productName}
              price={card.price}
              img={card.img}
              alt={card.alt}
            />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

RecommendationsLayout.propTypes = {};

export default RecommendationsLayout;
