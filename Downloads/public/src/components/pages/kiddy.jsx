import React from "react";
import KiddyLst from "./section/kiddy_head";
import DashHome from "./common_section/dash_home";
import KiddyForm from "./section/kiddy_form";

const Kiddy = () => {
  const kiddy_obj = {
    head: {
      heading: "Kiddy garden Oran ",
      btn: "active",
      btn_link: "/",
      image: "images/arrow.png",
    },
    boxes: {
      block: [
        {
          id: 1,
          number: "149",
          sub_title: "affiliated clients",
        },
        {
          id: 2,
          number: "149",
          sub_title: "Entries this month",
        },
        {
          id: 3,
          number: "149",
          sub_title: "total entries",
        },
        {
          id: 4,
          number: "149",
          sub_title: "total entries",
        },
      ],
    },
    form: {
      heading1: "Client name Info",
      heading2: "loyalty card infos",
      heading3: "Card design",
      image: "images/Logo_kiddy8.png",
    },
  };
  return (
    <>
      <KiddyLst data={kiddy_obj?.head} />
      <DashHome data={kiddy_obj?.boxes} />
      <KiddyForm data={kiddy_obj?.form} />
    </>
  );
};

export default Kiddy;
