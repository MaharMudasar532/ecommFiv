import React from "react";

const KiddyF1 = () => {
  return (
    <>
      <form>
        <h4>Client name Info</h4>
        <div className="row">
          <div className="col-md-12">
            <div className="txtGrp">
              <label>
                Name<span className="required">*</span>
              </label>
              <input type="txt" placeholder="Enter Name" className="txtBox" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="txtGrp">
              <label>
                Email<span className="required">*</span>
              </label>
              <input type="txt" placeholder="Enter Email" className="txtBox" />
            </div>
          </div>
          {/* <div className="col-md-4">
            <div className="txtGrp">
              <div className="form_flag">
                <img src="images/flag.png" alt=""></img>
              </div>
            </div>
          </div> */}
          <div className="col-md-12">
            <div className="txtGrp">
              <label>
                Phone Number<span className="required">*</span>
              </label>
              <input type="txt" placeholder="Enter Number" className="txtBox" />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default KiddyF1;
