import React from "react";
import { NavLink } from "react-router-dom";

const Kiddyhead = ({ data }) => {
  return (
    <>
      <div className="kd_head">
        <div className="flex">
          <div className="image">
            <img src={data.image} alt=""></img>
          </div>
          <h5>{data.heading}</h5>
        </div>
        <div className="cta">
          <NavLink to={data.btn_link} className="buTn">
            {data.btn}
          </NavLink>
        </div>
      </div>
      <hr></hr>
    </>
  );
};

export default Kiddyhead;
