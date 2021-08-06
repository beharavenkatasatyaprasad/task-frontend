import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import CreateAgentModal from "../components/CreateAgentModal";
import Card from "../components/Card";
import { getAgents } from "../api";

function Main() {
  const [loading, setloading] = useState(true);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [agents, setagents] = useState([]);

  useEffect(() => {
    if (loading) readAgents();
  });

  const readAgents = () => {
    getAgents()
      .then((res) => {
        setagents([...res]);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Navbar openModal={(e) => openModal()} reload={(e) => setloading(true)} />
      <CreateAgentModal
        reload={(e) => setloading(true)}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
      <div className={`container-fluid row justify-content-center`}>
        {agents.length > 0 ? (
          agents.map((candidate) => {
            return <Card reload={(e) => setloading(true)} key={Math.random() + ""} candidate={candidate} />;
          })
        ) : (
          <div className="my-5 text-center">
            <h5 className="my-5">No Agents Found</h5>
          </div>
        )}
      </div>
    </>
  );
}

export default Main;
