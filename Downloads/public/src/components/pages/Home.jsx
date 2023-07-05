import React from "react";
import DashHome from "./common_section/dash_home";
import DashClient from "./section/dash_client";
const Home = () => {
  const home_obj = {
    boxes: {
      block: [
        {
          id: 1,
          number: "300",
          sub_title: "client/loyalty Cards ",
        },
        {
          id: 2,
          number: "1746",
          sub_title: "Users",
        },
        {
          id: 3,
          number: "1746",
          sub_title: "cDaily scans",
        },
        {
          id: 4,
          number: "1746",
          sub_title: "New users monthly",
        },
      ],
    },
    card: {
      block: [
        {
          id: "1",
          name: "Client/card’s name",
          d_rig: "Date of registration",
          name_1: "Parc aux pirates - ALGER",
          d_1: "11/07/2023 at 16:30",
          btn: "Active",
          btn_link: "/",
          btn_2: "client",
          btn_2_link: "/",
          name_2: "kiddy garden - Oran",
          d_2: "11/07/2023 at 16:20",
          btn_3: "inactive",
        },
        {
          id: "2",
          name: "User’s ID",
          d_rig: "Date of registration",
          name_1: "Parc aux pirates - ALGER",
          d_1: "11/07/2023 at 16:30",
          btn: "active",
          btn_link: "/",
          btn_2: "client",
          btn_2_link: "/",
          name_2: "kiddy garden - Oran",
          d_2: "11/07/2023 at 16:20",
          btn_3: "inactive",
        },
        {
          id: "3",
          name: "Sales Notes",
          d_rig: "Date of promotion",
          name_1: "Parc aux pirates - ALGER",
          d_1: "11/07/2023 at 16:30",
          btn: "Active",
          btn_link: "/",
          btn_2: "client",
          btn_2_link: "/",
          name_2: "kiddy garden - Oran",
          d_2: "11/07/2023 at 16:20",
          btn_3: "inactive",
        },
      ],
    },
  };
  return (
    <>
      <DashHome data={home_obj?.boxes} />
      <DashClient data={home_obj?.card} />
    </>
  );
};

export default Home;
