import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { getAgentDetails } from "../api";
import { AwesomeButton } from "react-awesome-button";
import { updateAgent } from "../api";

export default function UpdateAgent() {
  const [loading, setloading] = useState(true);
  const [name, setname] = useState("");
  const [experience, setexperience] = useState("");
  const [description, setdescription] = useState("");
  const [qualification, setqualification] = useState("");
  const [age, setage] = useState("");
  const [gender, setgender] = useState("");
  const [status, setstatus] = useState("");
  const [email, setemail] = useState("");
  const [mbl, setmbl] = useState("");
  const params = useParams();
  const history = useHistory();

  const updateagent = () => {
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
    updateAgent(params.agentId, data)
      .then((res) => {
        console.log(res);
        history.push("/");
      })
      .catch((Err) => {
        console.log(Err);
      });
  };

  useEffect(() => {
    if (loading) getDetails();
  });

  const getDetails = () => {
    getAgentDetails(params.agentId)
      .then((resp) => {
        setname(resp.name);
        setdescription(resp.description);
        setmbl(resp.mbl);
        setstatus(resp.status);
        setage(resp.age);
        setexperience(resp.experience);
        setqualification(resp.qualification);
        setgender(resp.gender);
        setemail(resp.email);

        setloading(false);
      })
      .catch((Err) => {
        console.log(Err);
      });
  };
  return (
    <>
      <div className=" container mt-3">
        <Link to="/">{"< "}go back</Link>
        <h3 className="text-center">Update Agent Info</h3>
      </div>
      <div className="d-flex justify-content-center">
        <div className="col-sm-6">
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
              updateagent();
            }}
            type="secondary"
            className="mt-2 mb-5"
          >
            Update Agent Info
          </AwesomeButton>
        </div>
      </div>
    </>
  );
}
