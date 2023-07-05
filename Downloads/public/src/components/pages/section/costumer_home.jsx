import React from "react";
import KiddyF3 from "../common_section/kiddy_f3";
import CostumerForm from "./costumer_form";

const CostumerHome = () => {
  return (
    <>
      <div className="costumer_card">
        <div className="flex">
          <div className="col">
            <div className="inside">
              <KiddyF3 />
              <div className="delete_it">
                <img src="images/delete.png" alt=""></img>
              </div>
            </div>
            <div className="inside">
              <KiddyF3 />
              <div className="delete_it">
                <img src="images/delete.png" alt=""></img>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="inside">
              <KiddyF3 />
              <div className="delete_it">
                <img src="images/delete.png" alt=""></img>
              </div>
            </div>
            <div className="inside">
              <KiddyF3 />
              <div className="delete_it">
                <img src="images/delete.png" alt=""></img>
              </div>
            </div>
          </div>
          <div className="col kiddyform">
            <CostumerForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default CostumerHome;
