import React from "react";
const DashHome = ({ data }) => {
  return (
    <div className="dash_score">
      <div className="flex">
        {data.block.map((val) => {
          return (
            <div class="col" key={val.id}>
              <div class="inner">
                <div className="dash_num">
                  <h1>{val.number}</h1>
                  <p>{val.sub_title}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <hr></hr>
    </div>
  );
};

export default DashHome;
