import React from "react";
import LowerHead from "../components/LowerHead";

const LowerHeadContainer = () => {
  const list = [
    {
      name: "Каталог товаров",
    },
    {
      name: "Дополнительное оборудование",
    },
    {
      name: "Популярные категории",
    },
    {
      name: "Рекомендуемые товары",
    },
  ];
  return <LowerHead links={list} />;
};

export default LowerHeadContainer;
