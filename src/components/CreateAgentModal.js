import React, { useState } from "react";
import Modal from "react-modal";
import { AwesomeButton } from "react-awesome-button";
import { createAgent } from "../api";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "50%",
    height: "80%",
    zIndex: "999999",
    transform: "translate(-50%, -50%)",
    boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
  },
};

export default function CreateAgentModal({ modalIsOpen, closeModal, reload }) {
  const [name, setname] = useState("");
  const [experience, setexperience] = useState("");
  const [description, setdescription] = useState("");
  const [qualification, setqualification] = useState("");
  const [age, setage] = useState("");
  const [gender, setgender] = useState("");
  const [status, setstatus] = useState("");
  const [email, setemail] = useState("");
  const [mbl, setmbl] = useState("");

  const Addagent = () => {
    const data = {
      name,
      experience,
      description,
      qualification,
      age,
      gender,
      status,
      email,
      mbl,
    };
    createAgent(data)
      .then((res) => {
        console.log(res);
        reload();
        closeModal(closeModal);
      })
      .catch((Err) => {
        console.log(Err);
      });
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Create Agents Modal"
      >
        <div className="form-group mb-3">
          <label for="name">Name :</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
            className="form-control"
            id="name"
          />
        </div>
        <div className="form-group mb-3">
          <label for="Experience">Experience :</label>
          <input
            type="text"
            value={experience}
            onChange={(e) => setexperience(e.target.value)}
            className="form-control"
            id="Experience"
          />
        </div>
        <div className="form-group mb-3">
          <label for="Description">Description :</label>
          <textarea
            type="text"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            className="form-control"
            id="Description"
          />
        </div>
        <div className="form-group mb-3">
          <label for="Qualification">Qualification :</label>
          <input
            type="text"
            value={qualification}
            onChange={(e) => setqualification(e.target.value)}
            className="form-control"
            id="Qualification"
          />
        </div>
        <div className="form-group mb-3">
          <label for="age">age :</label>
          <input
            type="text"
            value={age}
            onChange={(e) => setage(e.target.value)}
            className="form-control"
            id="age"
          />
        </div>
        <div className="form-group mb-3">
          <label for="gender">Gender :</label>
          <select
            value={gender}
            onChange={(e) => setgender(e.target.value)}
            name=""
            id="gender"
            className="form-control"
          >
            <option value="MALE">MALE</option>
            <option value="FEMALE">FEMALE</option>
          </select>
        </div>
        <div className="form-group mb-3">
          <label for="status">Status :</label>
          <input
            value={status}
            onChange={(e) => setstatus(e.target.value)}
            type="text"
            className="form-control"
            id="status"
          />
        </div>
        <div className="form-group mb-3">
          <label for="email">email :</label>
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type="email"
            className="form-control"
            id="email"
          />
        </div>
        <div className="form-group mb-3">
          <label for="mobile">Mobile :</label>
          <input
            type="text"
            value={mbl}
            onChange={(e) => setmbl(e.target.value)}
            className="form-control"
            id="mobile"
          />
        </div>
        <AwesomeButton
          onPress={(e) => {
            Addagent();
          }}
          type="secondary"
          className="mx-2"
        >
          Add Agent
        </AwesomeButton>
      </Modal>
    </div>
  );
}
