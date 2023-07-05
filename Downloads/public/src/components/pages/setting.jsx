import React from "react";
import SettingHome from "./section/setting_home";

const Setting = () => {
  const setting_obj = {
    boxes: {
      block: [
        {
          id: "1",
          name: "karim taha",
          date: "11/07/2023",
          btn: "Edit sale",
          btn_link: "/",
          name_2: "Superadmin",
        },
        {
          id: "2",
          name: "Salesman",
          date: "11/07/2023",
          btn: "Edit sale",
          btn_link: "/",
          name_2: "Superadmin",
        },
        {
          id: "3",
          name: "admin name",
          date: "11/07/2023",
          btn: "Edit sale",
          btn_link: "/",
          name_2: "Superadmin",
        },
      ],
    },
  };
  return (
    <>
      <SettingHome data={setting_obj.boxes} />
    </>
  );
};

export default Setting;
