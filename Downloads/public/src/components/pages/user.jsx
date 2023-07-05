import React from "react";
import UserHome from "./common_section/user_home";

const User = () => {
  const user_obj = {
    boxes: {
      name: "User’s ID",
      date_1: "Date of registration",
      block: [
        {
          id: "1",
          name_1: "Mudasar",
          date_2: "11/07/2023 at 16:30",
          btn: "Affiliated cards ",
          btn_link: "/",
          btn_2: "Edit costumor",
          btn_2_link: "/",
        },
        {
          id: "2",
          name_1: "Name and surname",
          date_2: "11/07/2023 at 16:30",
          btn: "Affiliated cards ",
          btn_link: "/",
          btn_2: "Edit costumor",
          btn_2_link: "/",
        },
      ],
    },
  };
  return (
    <>
      <UserHome data={user_obj?.boxes} />
    </>
  );
};

export default User;
