import React from "react";
import { NavLink } from "react-router-dom";
const ClientLst = ({ val }) => {
  return (
    <>
      <div className="flex">
        <div className="col-1">
          <p className="client_name">{val.name_1}</p>
        </div>
        <div className="col-2">
          <p>{val.date_2}</p>
        </div>
        <div className="col-3">
          <div>
            <NavLink to={val.btn_link} className="buTn  purpleBtn">
              {val.btn}
            </NavLink>
          </div>
        </div>
        <div className="col-4">
          <NavLink to={val.btn_2_link} className="buTn mainButn">
            {val.btn_2}
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default ClientLst;
