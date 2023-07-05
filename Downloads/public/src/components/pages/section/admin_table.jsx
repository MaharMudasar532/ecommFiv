import React from "react";
import AdminTableData from "./admin_table_data";

const AdminTable = ({ data }) => {
  return (
    <>
      <div className="set_it admin_it">
        <div className="head">
          <h5>{data.info}</h5>
          <h5>{data.desi}</h5>
        </div>
        {data.block.map((val) => {
          return <AdminTableData val={val} />;
        })}
      </div>
    </>
  );
};

export default AdminTable;
