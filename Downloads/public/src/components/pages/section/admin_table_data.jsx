import React from "react";
import { NavLink } from "react-router-dom";
const AdminTableData = ({ val }) => {
  return (
    <>
      <div className="flex color_it">
        <div className="st_name">
          <p>{val.name}</p>
        </div>
        <div className="st-admin">
          <p>{val.name_2}</p>
        </div>
        <div className="cta">
          <NavLink to={val.button_link} className="buTn mainButn">
            {val.button}
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminTableData;
