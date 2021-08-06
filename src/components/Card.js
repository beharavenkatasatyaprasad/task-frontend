import React from "react";
import ReactTooltip from "react-tooltip";
import Avatar from "react-avatar";
import { deleteAgent } from "../api";
import { useHistory } from "react-router-dom";

export default function Card({ candidate, reload }) {
  const history = useHistory();
  return (
    <div className="candidate-card card col-sm-12 col-md-12 col-lg-3">
      <div className="col-sm-12 p-1 candidate-data">
        <div className="candidate-container col-sm-12 p-0 m-0">
          <div className="row">
            <div className="col text-center candidate-photo justify-content-between col-lg-3 col-sm-12 p-0 m-0">
              <Avatar
                name={candidate.name}
                round={true}
                size={"60px"}
                className="mt-2"
              />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-3 candidate-details col-lg-9 pr-1 pt-2 col-sm-12 p-0 m-0">
              <span className="float-right status badge-secondary px-1">
                {candidate.status}
              </span>
              <p className="name">{candidate.name}</p>
              <p className="experience">
                {candidate.age + " , " + candidate.gender}
              </p>
              <p className="description">{candidate.description}</p>
              <p className="qualification">{candidate.qualification}</p>
              <p className="age-gender">
                {candidate.experience + "  " + "experienced"}
              </p>
            </div>
            <div className="d-flex no-gutters text-center">
              <div className="col row">
                <div className="col">
                  <a href="/" data-tip data-for="mblNum">
                    <i className="fa fa-headphones" aria-hidden="true"></i>
                  </a>
                  <ReactTooltip id="mblNum" type="info">
                    <span>{candidate.mbl}</span>
                  </ReactTooltip>
                </div>
                <div className="col">
                  <a href="/" data-tip data-for="email">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </a>

                  <ReactTooltip id="email" type="info">
                    <span>{candidate.email}</span>
                  </ReactTooltip>
                </div>
                <div className="col">
                  <button
                    onClick={(e) => {
                      deleteAgent(candidate._id)
                        .then((res) => {
                          console.log(res);
                          reload();
                        })
                        .catch((Err) => {
                          console.log(Err);
                        });
                    }}
                    className="btn p-0 text-primary"
                  >
                    <i className="fa fa-trash" aria-hidden="true"></i>
                  </button>
                </div>
                <div className="col">
                  <button
                    onClick={(e) => {
                      history.push(`/update/${candidate._id}`);
                    }}
                    className="btn p-0 text-primary"
                  >
                    <i className="fa fa-edit"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
