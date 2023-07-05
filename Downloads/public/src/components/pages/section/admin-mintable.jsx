import React from "react";
import { NavLink } from "react-router-dom";
const AdminMintable = ({ data }) => {
  return (
    <>
      <div className="set_it" style={{ height: "unset", marginTop: "10px" }}>
        <div className="flex color_it">
          <div className="st_name">
            <p>{data.name_1}</p>
          </div>
          <div className="st-admin">
            <p>{data.name_2}</p>
          </div>
          <div className="st-date">
            <p>{data.date}</p>
          </div>
          <div className="cta">
            <NavLink to={data.btn_link} className="buTn mainButn">
              {data.btn}
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminMintable;
