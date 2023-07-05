import React from "react";
import { NavLink } from "react-router-dom";

const AdminHead = ({ data }) => {
  return (
    <>
      <div className="admin_head">
        <div className="heading">
          <h3>{data.heading}</h3>
          <p>{data.para}</p>
        </div>
        <div className="cta">
          <NavLink to="?">
            {data.button}
            <div className="image">
              <img alt="" src="images/plus.png"></img>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminHead;
