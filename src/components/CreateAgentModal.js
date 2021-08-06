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
          <label htmlFor="name">Name :</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
            className="form-control"
            id="name"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="Experience">Experience :</label>
          <input
            type="text"
            value={experience}
            onChange={(e) => setexperience(e.target.value)}
            className="form-control"
            id="Experience"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="Description">Description :</label>
          <textarea
            type="text"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            className="form-control"
            id="Description"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="Qualification">Qualification :</label>
          <input
            type="text"
            value={qualification}
            onChange={(e) => setqualification(e.target.value)}
            className="form-control"
            id="Qualification"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="age">age :</label>
          <input
            type="text"
            value={age}
            onChange={(e) => setage(e.target.value)}
            className="form-control"
            id="age"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="gender">Gender :</label>
          <select
            value={gender}
            onChange={(e) => setgender(e.target.value)}
            name=""
            id="gender"
            className="form-control"
          >
            <option selected value="">
              -- select one --
            </option>
            <option value="MALE">MALE</option>
            <option value="FEMALE">FEMALE</option>
          </select>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="status">Status :</label>
          <select
            value={status}
            onChange={(e) => setstatus(e.target.value)}
            name=""
            id="status"
            className="form-control"
          >
            <option selected value="">
              -- select one --
            </option>
            <option value="Available">Available</option>
            <option value="Not Avalilable">Not Avalilable</option>
            <option value="On a GIG">On a GIG</option>
          </select>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="email">email :</label>
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type="email"
            className="form-control"
            id="email"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="mobile">Mobile :</label>
          <input
            type="text"
            value={mbl}
            onChange={(e) => setmbl(e.target.value)}
            className="form-control"
            id="mobile"
          />
        </div>
        <AwesomeButton
          disabled={
            !name ||
            !experience ||
            !description ||
            !qualification ||
            !age ||
            !gender ||
            !status ||
            !email ||
            !mbl
          }
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
