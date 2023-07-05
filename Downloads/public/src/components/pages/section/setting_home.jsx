import React from "react";
import SettingLst from "./settingLst";

const SettingHome = ({ data }) => {
  return (
    <>
      <div className="set_it">
        {data.block.map((val) => {
          return <SettingLst val={val} />;
        })}
      </div>
    </>
  );
};

export default SettingHome;
