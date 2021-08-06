import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { AwesomeButton } from "react-awesome-button";

function Main() {
  const [loading, setloading] = useState(false);
  const [query, setquery] = useState("");

  return (
    <>
      <Navbar />
      <div className="d-flex my-5 pt-2 justify-content-center">
        <input
         className=""
          value={query}
          onChange={(e) => setquery(e.target.value)}
        ></input>
        <AwesomeButton
          onPress={() => {
            setloading(true);
          }}
          type="primary"
        >
          <span className="material-icons">search</span>
        </AwesomeButton>
      </div>
      <div className="">
        
      </div>
    </>
  );
}

export default Main;
