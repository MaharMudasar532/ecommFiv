import React from "react";
import DashHome from "./common_section/dash_home";
import UserHome from "./common_section/user_home";

const Notes = () => {
  const notes_obj = {
    boxes: {
      block: [
        {
          id: 1,
          number: "149",
          sub_title: "Sales notes this month",
        },
        {
          id: 2,
          number: "149",
          sub_title: "Entries this month",
        },
        {
          id: 3,
          number: "149",
          sub_title: "CR this month",
        },
        {
          id: 4,
          number: "149",
          sub_title: "CR all time",
        },
      ],
    },
    sales: {
      name: "Sales Notes",
      date_1: "Date of promotion",
      block: [
        {
          id: "1",
          name_1: "beauty salon - 30%",
          date_2: "11/07/2023 at 16:30",
          btn: "Active ",
          btn_link: "/",
          btn_2: "Edit sale",
          btn_2_link: "/",
        },
        {
          id: "2",
          name_1: "beauty saloon sales",
          date_2: "11/07/2023 at 16:30",
          btn: "Active",
          btn_link: "/",
          btn_2: "Edit sale",
          btn_2_link: "/",
        },
      ],
    },
  };
  return (
    <>
      <DashHome data={notes_obj.boxes} />
      <UserHome data={notes_obj.sales} />
    </>
  );
};

export default Notes;
