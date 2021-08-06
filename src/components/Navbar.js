import React, { useState, useEffect } from "react";
import { AwesomeButton } from "react-awesome-button";

const Navbar = ({ openModal }) => {

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
                  <a href="/" className={`header_logo my-auto`}>TEST APP</a>
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
      </header>
    </>
  );
};

export default Navbar;
