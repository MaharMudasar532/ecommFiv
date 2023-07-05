import React from "react";
import KiddyF1 from "./kiddy_f1";
import KiddyF2 from "./kiddy_f2";
import KiddyF3 from "../common_section/kiddy_f3";
import { NavLink } from "react-router-dom";
const KiddyForm = () => {
  return (
    <>
      <div className="kiddyform">
        <div className="flex">
          <div className="col">
            <KiddyF1 />
          </div>
          <div className="col">
            <KiddyF2 />
          </div>
          <div className="col">
            <KiddyF3 />
            <div className="cta">
              <NavLink>
                <div className="add_it">
                  <img src="images/plus.png" alt=""></img>
                </div>
                Creat or modify card design{" "}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KiddyForm;
