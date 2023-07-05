import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const RequestForm = ({ data }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleClick = () => {
    // Trigger the file input click event when the button is clicked
    document.getElementById("fileInput").click();
  };
  return (
    <>
      <div className="req_inner">
        <div className="flex">
          <div className="col">
            <div className="heading">
              <h4>{data.title}</h4>
              <p>{data.para}</p>
            </div>
            <form>
              <div className="row">
                <div className="col-md-12">
                  <div className="txtGrp">
                    <input type="txt" placeholder="Title" className="txtBox" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="txtGrp">
                    <textarea
                      className="txtBox"
                      placeholder="write a short description"
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="txtGrp">
                    <button
                      type="button"
                      class="uploadImg"
                      onClick={handleClick}
                    >
                      <div className="gallery_pic">
                        <img alt="" src="images/gallery.png"></img>
                      </div>
                      Add picture if needed
                    </button>
                    <input
                      type="file"
                      class="uploadFile"
                      id="fileInput"
                      onChange={handleFileChange}
                    ></input>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="txtGrp">
                    <button className="buTn">{data.button}</button>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="txtGrp">
                    <p className="style-me">
                      {data.para_2}
                      <NavLink to="?">{data.link}</NavLink>
                      {data.para_3}
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col">
            <div className="req_inside">
              <p>
                {data.percent} <small>{data.small}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestForm;
