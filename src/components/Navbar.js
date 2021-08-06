import React, { useState, useEffect } from "react";
import { AwesomeButton } from "react-awesome-button";

const Navbar = ({ openModal }) => {
  const [scrollHeaderClass, setscrollHeaderClass] = useState("top");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scrollHeaderClass = "bg-vey shadow";
      if (window.scrollY === 0) {
        scrollHeaderClass = "";
      }
      setscrollHeaderClass(scrollHeaderClass);
    });
  });

  return (
    <>
      <header
        id="header_sec"
        className={`header_sec bg_transparent border_none ${scrollHeaderClass}`}
      >
        <div className="container-fluid p-3">
          <div className="row">
            <div className="col-12">
              <div className="header_box">
                <div className="d-flex justify-content-between">
                  <p className={`header_logo my-auto`}>TEST APP</p>
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
