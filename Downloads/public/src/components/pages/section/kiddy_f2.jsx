import React, { useState } from "react";

const KiddyF2 = () => {
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
      <form>
        <h4>loyalty card infos</h4>
        <div className="row">
          <div className="col-md-12">
            <div className="txtGrp">
              <label>
                Your business name<span className="required">*</span>
              </label>
              <input type="txt" placeholder="Enter name" className="txtBox" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="txtGrp">
              <label>
                Category<span className="required">*</span>
              </label>
              <input
                type="txt"
                placeholder="scroll here to find it"
                className="txtBox"
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="txtGrp">
              <label>
                your fidelity system<span className="required">*</span>
              </label>
              <input
                type="txt"
                placeholder="1 free after 9 ( or scroll to find more)"
                className="txtBox"
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="txtGrp">
              <label>
                Add you logo<span className="required">*</span>
              </label>
              <button type="button" class="uploadImg" onClick={handleClick}>
                <div className="gallery_pic">
                  <img alt="" src="images/gallery.png"></img>
                </div>
                add your logo here
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
              <label>
                Points for every entery<span className="required">*</span>
              </label>
              <input
                type="txt"
                placeholder="scroll to choose"
                className="txtBox"
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="txtGrp">
              <button className="buTn saveBtn">Save changes</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default KiddyF2;
