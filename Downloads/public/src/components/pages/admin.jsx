import React from "react";
import AdminHead from "./section/admin_head";
import AdminTable from "./section/admin_table";
import AdminForm from "./section/admin_form";
import AdminMintable from "./section/admin-mintable";

const Admin = () => {
  const admin_obj = {
    head: {
      heading: "Admin managements",
      para: "Creat and manage admin all in one place",
      button: "Creat an admin profile",
    },
    ad_info: {
      info: "Client name Info",
      desi: "Designation",
      block: [
        {
          id: "1",
          name: "Admin name",
          name_2: "Superadmin",
          button: "Edit sale",
          button_link: "/",
        },
        {
          id: "2",
          name: "Admin name",
          name_2: "Superadmin",
          button: "Edit sale",
          button_link: "/",
        },
      ],
    },
    ad_form: {
      link: "Save admin",
      para_2: "By creating an account, you have accepted the ",
      para_3: "of Wafaa - loyalty cards wallet",
      link_2: "TERMS & CONDITIONS ",
    },
    ad_mini: {
      name_1: "karim taha",
      date: "11/07/2023",
      btn: "Edit sale",
      btn_link: "/",
      name_2: "Superadmin",
    },
  };
  return (
    <>
      <AdminHead data={admin_obj?.head} />
      <AdminTable data={admin_obj?.ad_info} />
      <AdminForm data={admin_obj?.ad_form} />
      <AdminMintable data={admin_obj?.ad_mini} />
    </>
  );
};

export default Admin;
