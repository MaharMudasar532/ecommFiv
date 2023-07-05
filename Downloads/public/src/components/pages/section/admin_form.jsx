import React from "react";
import { NavLink } from "react-router-dom";
const AdminForm = ({ data }) => {
  return (
    <>
      <div className="admin_form kiddyform">
        <div className="flex">
          <div className="col">
            <form>
              <h4>Client name Info</h4>
              <div className="row">
                <div className="col-md-12">
                  <div className="txtGrp">
                    <label>
                      Name<span className="required">*</span>
                    </label>
                    <input
                      type="txt"
                      placeholder="Enter Name"
                      className="txtBox"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="txtGrp">
                    <label>
                      Email<span className="required">*</span>
                    </label>
                    <input
                      type="txt"
                      placeholder="Enter Email"
                      className="txtBox"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="txtGrp">
                    <label>
                      Phone Number<span className="required">*</span>
                    </label>
                    <input
                      type="txt"
                      placeholder="Enter Number"
                      className="txtBox"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="txtGrp">
                    <label>
                      Poassword <span className="required">*</span>
                    </label>
                    <input
                      type="txt"
                      placeholder="Enter Password"
                      className="txtBox"
                    />
                    <div className="eye_icon">
                      <img alt="" src="images/hidden.png"></img>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="txtGrp">
                    <label>
                      Confirm Password<span className="required">*</span>
                    </label>
                    <input
                      type="txt"
                      placeholder="Enter Password"
                      className="txtBox"
                    />
                    <div className="eye_icon">
                      <img alt="" src="images/hidden.png"></img>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col">
            <div className="ad_cta">
              <NavLink to="?" className="buTn">
                {data.link}
              </NavLink>
              <div className="condition">
                <p className="style-me">
                  {data.para_2}
                  <NavLink to="?">{data.link_2}</NavLink>
                  {data.para_3}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminForm;
