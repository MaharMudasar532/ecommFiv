import React from "react";
import { NavLink } from "react-router-dom";

const SettingLst = ({ val }) => {
  return (
    <>
      <div className="flex color_it">
        <div className="st_name">
          <p>{val.name}</p>
        </div>
        <div className="st-admin">
          <p>{val.name_2}</p>
        </div>
        <div className="st-date">
          <p>{val.date}</p>
        </div>
        <div className="cta">
          <NavLink to={val.btn_link} className="buTn mainButn">
            {val.btn}
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default SettingLst;
