import React, { useState, useEffect } from "react";
import { AwesomeButton } from "react-awesome-button";
import { exportAgents, importAgents } from "../api";
import * as FileSaver from "file-saver";

const Navbar = ({ openModal, reload }) => {
  const hiddenFormInput = React.useRef(null);

  const handleFileUpload = (e) => {
    let data = new FormData();
    data.append("uploadfile", e.target.files[0]);
    importAgents(data)
      .then((res) => {
        reload();
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const exportAndDownload = () => {
    exportAgents().then((res) => {
      const data = new Blob([res], { type: fileType });
      FileSaver.saveAs(data, "agents" + fileExtension);
    });
  };

  return (
    <>
      <header
        id="header_sec"
        className={`header_sec bg_transparent border_none`}
      >
        <div className="container-fluid p-3">
          <div className="row">
            <div className="col-12">
              <div className="header_box">
                <div className="d-flex justify-content-between">
                  <a href="/" className={`header_logo my-auto`}>
                    TEST APP
                  </a>
                  <input
                    ref={hiddenFormInput}
                    type="file"
                    onChange={(e) => handleFileUpload(e)}
                    style={{ display: "none" }}
                  />
                  <div className="d-flex">
                    <div className="my-auto">
                      <AwesomeButton
                        onPress={(e) => {
                          hiddenFormInput.current.click();
                        }}
                        type="secondary"
                        className="mx-2"
                      >
                        Import
                      </AwesomeButton>
                    </div>
                    <div className="my-auto">
                      <AwesomeButton
                        onPress={(e) => {
                          exportAndDownload();
                        }}
                        type="secondary"
                        className="mx-2"
                      >
                        Export
                      </AwesomeButton>
                    </div>
                    <div className="my-auto">
                      <AwesomeButton
                        onPress={(e) => {
                          openModal();
                        }}
                        type="secondary"
                        className="mx-2"
                      >
                        Add Agent
                      </AwesomeButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
