import React from "react";
import ClientHome from "./section/client_home";
const Client = () => {
  const client_obj = {
    boxes: {
      name: "Client/card’s name",
      date_1: "Date of registration",
      block: [
        {
          id: "1",
          name_1: "Parc aux pirates - ALGER",
          date_2: "11/07/2023 at 16:30",
          btn: "Active",
          btn_link: "kiddy",
          btn_2: "Edit client",
          btn_2_link: "/",
          btn_3: "inactive",
          btn_3_link: "/",
        },
        {
          id: "2",
          name_1: "Parc aux pirates - ALGER",
          date_2: "11/07/2023 at 16:30",
          btn: "Active",
          btn_link: "/",
          btn_2: "Edit client",
          btn_2_link: "/",
          btn_3: "inactive",
          btn_3_link: "/",
        },
        {
          id: "3",
          name_1: "Parc aux pirates - ALGER",
          date_2: "11/07/2023 at 16:30",
          btn: "Active",
          btn_link: "/",
          btn_2: "Edit client",
          btn_2_link: "/",
          btn_3: "inactive",
          btn_3_link: "/",
        },
      ],
    },
  };
  return (
    <>
      <ClientHome data={client_obj?.boxes} />
    </>
  );
};

export default Client;
