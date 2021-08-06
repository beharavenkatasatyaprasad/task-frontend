import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CreateAgentModal from "../components/CreateAgentModal";
import Card from "../components/Card";

function Main() {
  const [loading, setloading] = useState(false);
  const [query, setquery] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [agents, setagents] = useState([]);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Navbar openModal={(e) => openModal()} />
      <CreateAgentModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
      <div
        className={`container-fluid d-flex justify-content-${
          agents.length > 0 ? "between" : "center"
        }`}
      >
        {agents.length > 0 ? (
          agents.map((candidate) => {
            return <Card key={Math.random() + ""} candidate={candidate} />;
          })
        ) : (
          <div className="">No Agents Found</div>
        )}
      </div>
    </>
  );
}

export default Main;
