import React from "react";
const Header = () => {
  return (
    <header className="dashboard_header">
      <div className="contain">
        <div className="header_flx">
          <div className="dash_logo flex">
            <form action="">
              <div className="form_row row">
                <div className="col-xs-12">
                  <div className="form_blk">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="txtBox"
                      placeholder="Search"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="ad_name txtBox">
            <p>Admin Name</p>
            <div className="image">
              <img src="images/user.png" alt=""></img>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
