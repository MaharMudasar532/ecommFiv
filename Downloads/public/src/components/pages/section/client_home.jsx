import React from "react";
import ClientLst from "./clientLst";

const ClientHome = ({ data }) => {
  return (
    <>
      <div className="dash_cards">
        <div className="client_detail">
          <div className="top_title_flex">
            <h5>{data.name}</h5>
            <h6 style={{ left: "566px" }}>{data.date_1}</h6>
          </div>
          {data.block.map((val) => {
            return <ClientLst val={val} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ClientHome;
