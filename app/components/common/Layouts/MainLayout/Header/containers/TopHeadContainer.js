import React from "react";
import { ROUTES } from "../../../../../../routes/routeNames";
import TopHead from "../components/TopHead";

const TopHeadContainer = () => {
  const links = [
    {
      name: "Главная",
      destination: `${ROUTES.HOME_PAGE}`,
    },
    {
      name: "Услуги и цены",
      destination: `${ROUTES.HOME_PAGE}`,
    },
    {
      name: "Статьи",
      destination: `${ROUTES.HOME_PAGE}`,
    },
    {
      name: "О компании",
      destination: `${ROUTES.HOME_PAGE}`,
    },
    {
      name: "Оплата и доставка",
      destination: `${ROUTES.HOME_PAGE}`,
    },
    {
      name: "Контакты",
      destination: `${ROUTES.HOME_PAGE}`,
    },
  ];

  const contacts = {
    phone: `${"+7(903) 521-58-37"} ${" "}`,
    schedule: "Пн-Вс: 10:00 - 19:00",
  };

  const values = Object.values(contacts);

  return <TopHead links={links} contacts={values} />;
};

export default TopHeadContainer;
