import React from "react";
import UserHome from "./common_section/user_home";
import CostumerHome from "./section/costumer_home";
const Costumer = () => {
  const costumer_obj = {
    boxes: {
      name: "Costumer’s ID",
      date_1: "Date of registration",
      block: [
        {
          id: "1",
          name_1: "name and surname",
          date_2: "11/07/2023 at 16:30",
          btn: "Affiliated cards",
          btn_link: "/",
          btn_2: "Edit costumor",
          btn_2_link: "/",
        },
      ],
    },
  };
  return (
    <>
      <UserHome data={costumer_obj?.boxes} />
      <CostumerHome />
    </>
  );
};

export default Costumer;
