import React from "react";
import DashCard from "./dash_card";
const DashClient = ({ data }) => {
  return (
    <div className="dash_cards">
      <div className="inner">
        {data.block.map((val) => {
          return <DashCard val={val} />;
        })}
      </div>
    </div>
  );
};

export default DashClient;
