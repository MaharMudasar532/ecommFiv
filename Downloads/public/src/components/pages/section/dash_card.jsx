import React from "react";
import { NavLink } from "react-router-dom";
const DashCard = ({ val }) => {
  return (
    <>
      <hr></hr>
      <div className="client_detail">
        <div className="top_title_flex">
          <h5>{val.name}</h5>
          <h6>{val.d_rig}</h6>
        </div>
        <div className="flex">
          <div className="col-1">
            <p className="client_name">{val.name_1}</p>
          </div>
          <div className="col-2">
            <p>{val.d_1}</p>
          </div>
          <div className="col-3">
            <div>
              <NavLink to={val.btn_link} className="buTn">
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
        <div className="flex">
          <div className="col-1">
            <p className="client_name">{val.name_1}</p>
          </div>
          <div className="col-2">
            <p>{val.d_1}</p>
          </div>
          <div className="col-3">
            <div>
              <NavLink to={val.btn_link} className="buTn purpleBtn">
                {val.btn_3}
              </NavLink>
            </div>
          </div>
          <div className="col-4">
            <NavLink to={val.btn_2_link} className="buTn mainButn">
              {val.btn_2}
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashCard;
